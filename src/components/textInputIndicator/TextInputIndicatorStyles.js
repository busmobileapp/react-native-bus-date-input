import {
    Platform,
    StyleSheet,
} from 'react-native';

const styles = StyleSheet.create({
    textInputContainer: {
        ...Platform.select({
            ios: {
                paddingTop: 5,
                paddingBottom: 5,
                borderBottomWidth: 1,
                borderBottomColor: '#8b8b8b'
            },
            android: {
            },
          })
    }
});

export default styles;