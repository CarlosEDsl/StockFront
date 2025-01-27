import React, { useState } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import AddProduct from '../AddProduct';
import styles from './styles';

export default function AddButton({ handleAddProduct, onClose }) {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <View style={[styles.addMenu, { padding: 10 }]}>
            <Text style={{ fontSize: 16, color: 'white' }}>Adicionar</Text>
            <TouchableOpacity 
                style={styles.button}
                onPress={() => setModalVisible(true)}
            >
                <Text style={{ color: 'white', fontSize: 24, fontWeight: 'bold' }}>+</Text>
            </TouchableOpacity>
            <AddProduct 
                isVisible={modalVisible} 
                onClose={() => setModalVisible(false)}
                handleAddProduct={handleAddProduct}
            />
        </View>
    );
}
