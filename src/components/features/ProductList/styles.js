import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    productList: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: '#BDBFC7',
        backgroundImage: 'linear-gradient(180deg, #B8BAC2 0%, #BDBFC7 50%, #C2C4CC 100%)',
        width: '100%'
    },
    addMenu: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        backgroundColor: '#4F5165',
        marginHorizontal: 10,
        marginBottom: 20,
        height: 50,
        width: '100%'
    },
    button: {
        marginLeft: 20,
        width: 40,  // largura do botão
        height: 40, // altura do botão
        backgroundColor: '#007AFF', // cor de fundo
        borderRadius: 20, // para fazer o botão circular
        justifyContent: 'center',
        alignItems: 'center',
        overflow: 'hidden'
    },
    text: {
        color: '#FFFFFF',
        fontSize: 24,
        fontWeight: 'bold'
    },
    product: {
        flexDirection: 'row',
        padding: 10,
        borderBottomWidth: 1,
        borderBottomColor: '#ccc',
    },
    leftContainer: {
        marginRight: 10,
    },
    productImage: {
        width: 80,
        height: 80,
        borderRadius: 5,
    },
    middleContainer: {
        flex: 1,
        justifyContent: 'center',
    },
    rightContainer: {
        width: 100,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    actionButtons: {
        alignItems: 'center',
    },
    editButton: {
        backgroundColor: '#4CAF50',
        padding: 5,
        borderRadius: 5,
        marginBottom: 5,
        width: '100%',
        alignItems: 'center',
    },
    deleteButton: {
        backgroundColor: '#f44336',
        padding: 5,
        borderRadius: 5,
        width: '100%',
        alignItems: 'center',
    },
    stockControls: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '100%',
    },
    stockButton: {
        backgroundColor: '#2196F3',
        width: 30,
        height: 30,
        borderRadius: 15,
        alignItems: 'center',
        justifyContent: 'center',
    },
    stockCount: {
        paddingHorizontal: 10,
    }
});

export default styles;
