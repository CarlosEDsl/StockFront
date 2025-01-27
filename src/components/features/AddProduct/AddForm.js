import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './style';
import ProductModel from '../../../models/productModel';

const AddForm = ({ handleAddProduct, onClose }) => {
    const [imageUri, setImageUri] = useState(null);
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    const createProduct = () => {
        const numericQuantity = parseInt(quantity);
        const numericPrice = parseFloat(price.replace('R$', '').replace(',', '.').trim());

        const product = new ProductModel(
            name,
            description,
            numericPrice,
            numericQuantity,
            imageUri
        );
        
        handleAddProduct(product);
        onClose();
    }

    const selectImage = async () => {
        try {
            const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
            if (status !== 'granted') {
                alert('Desculpe, preciso de permissão para acessar suas fotos');
                return;
            }

            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaType,
                allowsEditing: true,
                aspect: [4, 3],
                quality: 1,
            });

            if (!result.canceled) {
                setImageUri(result.assets[0].uri);
            }
        } catch (error) {
            console.log('Erro ao selecionar imagem:', error);
        }
    };

    return (
        <View style={styles.modal}>
            <Text>Nome do produto</Text>
            <TextInput 
                placeholder="Ex: Arroz" 
                value={name}
                onChangeText={setName}
            />
            <Text>Quantidade</Text>
            <TextInput 
                placeholder="Ex: 10" 
                value={quantity}
                onChangeText={setQuantity}
                keyboardType="numeric"
            />
            <Text>Preço</Text>
            <TextInput 
                placeholder="Ex: R$ 10,00" 
                value={price}
                onChangeText={setPrice}
                keyboardType="numeric"
            />
            <Text>Descrição</Text>
            <TextInput 
                placeholder="Ex: Arroz branco" 
                value={description}
                onChangeText={setDescription}
            />
            <Text>Imagem</Text>
            {imageUri && (
                <Image 
                    source={{ uri: imageUri }} 
                    style={{ width: 200, height: 200 }} 
                />
            )}
            <Button 
                title="Selecionar Imagem" 
                onPress={selectImage} 
            />
            <View style={styles.saveButton}>
                <Button 
                    style={styles.saveButton} 
                    title="Adicionar" 
                    onPress={createProduct} 
                />
            </View>
        </View>
    )
}

export default AddForm;