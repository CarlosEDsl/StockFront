import React, { useState } from 'react';
import { View } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';
import AddButton from './add';
import List from './list';
import styles from './styles';
import ProductService from '../../services/productService';
import UserService from '../../services/userService';

export default function ProductList() {

    const [listMessage, setListMessage] = useState("Nenhum produto cadastrado");
    const [list, setList] = useState([]);

    useFocusEffect(
        React.useCallback(() => {
            const loadProducts = async () => {
                try {
                    const userId = await UserService.getUserId();
                    const products = await ProductService.list(userId);
                    setList(products);
                    if (products.length > 0) {
                        setListMessage("Produtos cadastrados");
                    } else {
                        setListMessage("Nenhum produto cadastrado");
                    }
                } catch (error) {
                    console.error('Erro ao carregar produtos:', error);
                    setListMessage("Erro ao carregar produtos");
                }
            };

            loadProducts();
            
            return () => {
            };
        }, [])
    );

    function onClose() {
        
    }

    function handleAddProduct(product) {
        console.log('Produto recebido:', product);
        console.log('Lista atual:', list);
        
        if (!product) return;
        
        setList(prevList => {
            const newList = [...prevList, product];
            ProductService.create(product);
            return newList;
        });
        
        setListMessage("Produtos cadastrados");
    }

    function handleEditProduct(product) {
        setList(prevList => {
            const newList = [...prevList];
            const index = newList.findIndex(prod => prod.id === product.id);
            if (index !== -1) {
                newList[index] = product;
                ProductService.update(product.id, product);
            }
            return newList;
        });
    }

    function handleRemoveProduct(product) {
        setList(prevList => {
            const newList = [...prevList];
            const index = newList.findIndex(prod => prod.id === product.id);
            if (index !== -1) {
                newList.splice(index, 1);
                ProductService.delete(product.id);
            }
            if (newList.length === 0) {
                setListMessage("Nenhum produto cadastrado");
            }
            return newList;
        });
    }

    function handleStockChange(product, newAmount) {
        console.log('Produto recebido:', product);
        console.log('Nova quantidade:', newAmount);
        setList(prevList => {
            const newList = [...prevList];
            const index = newList.findIndex(prod => prod.id === product.id);
            if (index !== -1) {
                newList[index] = {
                    ...product,
                    quantity: newAmount
                };
                ProductService.update(product.id, product);
            }
            return newList;
        });
    }

    return (
        <View style={styles.productList}>
            <AddButton 
                handleAddProduct={handleAddProduct}
                onClose={onClose}
            />
            <List
                list={list}
                listMessage={listMessage}
                handleEditProduct={handleEditProduct}
                handleRemoveProduct={handleRemoveProduct}
                handleStockChange={handleStockChange}
            />
        </View>
    );
}
