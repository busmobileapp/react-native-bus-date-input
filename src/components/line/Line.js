import React, { Component } from 'react';
import {
    View
} from 'react-native';
import styles from './LineStyles';

class Line extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        if (this.props.style) {
            return (
                <View style={[styles.customContainer, this.props.style]}>
                </View>
            );
        }
        else {
            return (
                <View style={styles.container}>
                </View>
            );
        }
    }
}

export default Line;