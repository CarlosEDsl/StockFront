import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, Image, Modal } from 'react-native';
import * as ImagePicker from 'expo-image-picker';
import styles from './styles';
import ProductModel from '../../../models/productModel';

const EditForm = ({ visible, onClose, product, handleEditProduct }) => {
    const [imageUri, setImageUri] = useState('');
    const [name, setName] = useState('');
    const [quantity, setQuantity] = useState('');
    const [price, setPrice] = useState('');
    const [description, setDescription] = useState('');

    useEffect(() => {
        if (product) {
            setName(product.name);
            setQuantity(product.quantity.toString());
            setPrice(product.price.toString());
            setDescription(product.description);
            setImageUri(product.image);
        }
    }, [product]);

    const editProduct = () => {
        const numericQuantity = parseInt(quantity);
        const numericPrice = parseFloat(price);

        const updatedProduct = new ProductModel(
            name,
            description,
            numericPrice,
            numericQuantity,
            imageUri,
            product.id
        );
        
        handleEditProduct(updatedProduct);
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
        <Modal
            visible={visible}
            animationType="slide"
            onRequestClose={onClose}
        >
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
                <View style={styles.buttonContainer}>
                    <Button 
                        style={styles.saveButton} 
                        title="Salvar" 
                        onPress={editProduct} 
                    />
                    <Button 
                        style={styles.cancelButton} 
                        title="Cancelar" 
                        onPress={onClose} 
                    />
                </View>
            </View>
        </Modal>
    );
}

export default EditForm;