import React from 'react';
import { View, Text } from 'react-native';
import ProductList from '../../features/ProductList';
import styles from './styles';
import Login from '../../features/Auth/login';

export default function Main() {
    return (
        <View style={styles.mainBody}>
            <Login />
        </View>
    );
}
