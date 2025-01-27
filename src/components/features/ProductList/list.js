import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import Item from './item';

export default function List({ list, listMessage, handleEditProduct, handleRemoveProduct, handleStockChange }) {
    return (
        <View style={listStyles.container}>
            <Text style={listStyles.title}>{listMessage}</Text>
            <FlatList
                data={list}
                style={listStyles.list}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                    <Item 
                        product={item}
                        handleEditProduct={handleEditProduct} 
                        handleRemoveProduct={handleRemoveProduct} 
                        handleStockChange={handleStockChange}
                    />
                )}
            />
        </View>
    );
}

const listStyles = StyleSheet.create({
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 16,
    },
    list: {
        flex: 1,
        minWidth: '90%',
        marginBottom: 100
    },
    item: {
        padding: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
});
