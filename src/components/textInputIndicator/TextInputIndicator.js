import React, { Component } from 'react';
import {
    View,
    Text,
    TextInput,
    Platform
} from 'react-native';
import { isIOS } from '../../utils/DeviceInformation';
import styles from './TextInputIndicatorStyles';

class TextInputIndicator extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (isIOS()) {
            return (
                <View style={[styles.textInputContainer, this.props.style]}>
                    {this.props.children}
                </View>
            );
        }

        return (
            <View style={this.props.style}>
                {this.props.children}
            </View>
        );
    }
}

export default TextInputIndicator;