import {
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    splitSearchValueContainer: {
        flexDirection: 'row'
    },
    splitSearchValueInnerContainer: {
        flex: 1
    },
    labelText: {
        fontSize: 14,
        color: '#1972e0',
        marginBottom: 5
    },
    valueText: {
        fontSize: 14,
        color: '#777778',
        marginBottom: 20
    },
    defaultValueText: {
        marginTop: 15,
        marginBottom: 25,
        borderBottomWidth: 1,
        borderBottomColor: '#cccccc',
    },
    splitSearchValueInnerRightContainer: {
        flexDirection: 'row',
        marginLeft: 'auto'
    },
    clearIcon: {
        width: 30,
        height: 30
    },
});

export default styles;