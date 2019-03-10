import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F5FCFF'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'red',
        fontSize: 20
    },
    botao: {
        margin: 10,
        padding: 10,
        margin: 5,
        flex: 1
    },
    textHeader: {
        color: '#FFF'
    },
    footer: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        backgroundColor: 'red'
    },
    lista: {
        fontSize: 18,
        marginBottom: 2,
        paddingTop: 10,
        paddingBottom: 10
    },
    listaItens: {
        backgroundColor: '#DDD',
        paddingLeft: 20,
        marginLeft: 10,
        marginRight: 10,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 5
    }
});

export default styles; 