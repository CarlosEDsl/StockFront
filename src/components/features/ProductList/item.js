import { View, Text, TouchableOpacity, Image } from 'react-native';
import listStyles from './styles';
import EditForm from '../EditProduct/EditForm';
import styles from '../AddProduct/style';
import React, { useState } from 'react';

const Item = ({ product, handleEditProduct, handleRemoveProduct, handleStockChange }) => {
    const [modalVisible, setModalVisible] = useState(false);
    
    function openModal() {
        setModalVisible(true);
    }

    function handleRemove() {
        handleRemoveProduct(product);
    }

    function handleSChange(newAmount) {
        handleStockChange(product, newAmount);
    }

    return (
        <View style={listStyles.product}>
            <View style={listStyles.leftContainer}>
                <Image 
                    source={{ uri: product.image }} 
                    style={listStyles.productImage}
                />
            </View>
            
            <View style={listStyles.middleContainer}>
                <Text>Nome: {product.name}</Text>
                <Text>Preço: R$ {product.price}</Text>
                <Text>Quantidade: {product.quantity}</Text>
                <Text>Descrição: {product.description}</Text>
            </View>

            <View style={listStyles.rightContainer}>
                <View style={listStyles.actionButtons}>
                    <TouchableOpacity style={listStyles.editButton} onPress={openModal}>
                        <Text>Editar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={listStyles.deleteButton} onPress={handleRemove}>
                        <Text>Remover</Text>
                    </TouchableOpacity>
                </View>
                
                <View style={listStyles.stockControls}>
                    <TouchableOpacity style={listStyles.stockButton} onPress={() => handleSChange(product.quantity - 1)}>
                        <Text>-</Text>
                    </TouchableOpacity>
                    <Text style={listStyles.stockCount}>{product.quantity}</Text>
                    <TouchableOpacity style={listStyles.stockButton} onPress={() => handleSChange(product.quantity + 1)}>
                        <Text>+</Text>
                    </TouchableOpacity>
                </View>
            </View>

            <EditForm 
                visible={modalVisible}
                onClose={() => setModalVisible(false)}
                product={product}
                handleEditProduct={handleEditProduct}
            />
        </View>
    );
}

export default Item;

