import {
    StyleSheet,
    Platform
} from 'react-native';

const styles = StyleSheet.create({
    extendedMenu: {
        justifyContent: "flex-end",
        margin: 10,
        opacity: 0.8
    },
    modalBackground: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.7)'
    },
    menuParentContainer: {
        backgroundColor: '#f7f9fc',
        justifyContent: 'center',
        width: '100%',
        bottom: 0,
        padding: 30,
    },
    menuParentLandscapeContainer: {
        backgroundColor: '#f7f9fc',
        justifyContent: 'center',
        width: '100%',
        padding: 30,
    },
    splitContainer: {
        flexDirection: 'row'
    },
    splitInnerContainer: {
        flex: 0.5
    },
    modalHeading: {
        fontSize: 15,
        color: 'black',
        marginTop: 5,
        marginBottom: 10
    },
    splitInnerRightContainer: {
        flexDirection: 'row',
        marginLeft: 'auto'
    },
    line: {
        marginBottom: 20,
        borderBottomWidth: 0.5,
    },
    dateLabelText: {
        textAlign: 'center',
        marginTop: 20,
        fontSize: 14,
        color: '#606060'
    },
    dateFieldContainer: {
        padding: 1
    },
    dateInputIndicator: {
        borderBottomWidth: 0,
        borderWidth: 1,
        backgroundColor: 'white',
        borderColor: 'white',
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 18,
        flexDirection: 'row',
        marginRight: 5,
        marginLeft: 5,
        ...Platform.select({
            android: {
                paddingBottom: 0
            }
        })
    },
    dateInput: {
        marginLeft: 'auto',
        marginTop: 'auto',
        marginBottom: 'auto',
        color: 'black',
        ...Platform.select({
            android: {
                paddingBottom: 5
            }
        })
    },
    calendarIcon: {
        width: 20,
        height: 20,
        marginLeft: 'auto',
        marginRight: 10,
        ...Platform.select({
            android: {
                marginTop: 5,
                marginBottom: 5
            }
        })
    },
    buttonEnabledContainer: {
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 20,
        borderColor: '#1972e0',
        borderWidth: 1,
        fontSize: 16,
        marginLeft: 50,
        marginRight: 50
    },
    buttonEnabledText: {
        color: '#1972e0',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16
    },
    buttonDisabledContainer: {
        marginTop: 30,
        marginBottom: 20,
        borderRadius: 20,
        borderColor: '#a4a9ad',
        borderWidth: 1,
        fontSize: 16,
        marginLeft: 50,
        marginRight: 50
    },
    buttonDisabledText: {
        color: '#a4a9ad',
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 'auto',
        marginRight: 'auto',
        fontSize: 16
    },
    resetButon: {
        color: '#1972e0',
        fontSize: 15,
        fontWeight: 'bold',
        marginTop: 5
    }
});

export default styles;