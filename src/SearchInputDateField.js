import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableOpacity,
    Image,
} from 'react-native';
import images from '../images';
import styles from './SearchInputDateFieldStyles';
import { ModalDateRangeInput, TextInputIndicator } from '../Elements';
import { getFormattedDate } from '../../utils/Utilities';

class SearchInputField extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            modalExtendedMenuVisible: false,
            fromDate: null,
            toDate: null
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.fromDate !== nextProps.fromDate || this.props.toDate !== nextProps.toDate) {
            this.setState({ fromDate: nextProps.fromDate, toDate: nextProps.toDate });
        }
    }

    onTextPress = () => {
        this.setState({ modalExtendedMenuVisible: true });
    }

    reset = () => {
        this.setState({ fromDate: null, toDate: null });
        this.props.onDateChange(null, null);
    }

    onApplyButtonPress = (fromDate, toDate) => {
        this.setState({ fromDate: fromDate, toDate: toDate, modalExtendedMenuVisible: false });
        this.props.onDateChange(fromDate, toDate);
    }

    dismissModal = () => {
        this.setState({ modalExtendedMenuVisible: false });
    }

    renderModalDatepickerMenu() {
        return (
            <ModalDateRangeInput
                visible={this.state.modalExtendedMenuVisible}
                dismiss={this.dismissModal.bind(this)}
                onApplyButtonPress={this.onApplyButtonPress.bind(this)}
                name={this.props.name}
                fromDate={this.state.fromDate}
                toDate={this.state.toDate}
                isToDateRequired={this.props.isToDateRequired}
                bothRequired={this.props.bothRequired}
            />
        );
    }

    renderDateValue = () => {
        const fromDate = this.state.fromDate ? getFormattedDate(this.state.fromDate) : '';
        const toDate = this.state.toDate ? getFormattedDate(this.state.toDate) : '';

        return (
            <View style={styles.splitSearchValueContainer}>
                <View style={styles.splitSearchValueInnerContainer}>
                    <TouchableOpacity onPress={() => this.onTextPress()}>
                        <Text style={styles.labelText}>{this.props.name}</Text>
                        <Text style={styles.valueText}>{`${fromDate} - ${toDate}`}</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.splitSearchValueInnerRightContainer}>
                    <TouchableOpacity onPress={() => this.reset()}>
                        <Image style={styles.clearIcon} source={images.icons.close} />
                    </TouchableOpacity>
                </View>
                {this.renderModalDatepickerMenu()}
            </View>
        );
    }

    renderDefaultDate = () => {
        return (
            <View style={styles.splitSearchValueContainer}>
                <View style={styles.splitSearchValueInnerContainer}>
                    <TouchableOpacity onPress={() => this.onTextPress()}>
                        <Text style={styles.labelText}>{this.props.name}</Text>
                        <TextInputIndicator style={styles.defaultValueText} />
                    </TouchableOpacity>
                </View>
                {this.renderModalDatepickerMenu()}
            </View>
        );
    }

    render() {
        return (
            <View>
                {(this.state.fromDate || this.state.toDate) ? this.renderDateValue() : this.renderDefaultDate()}
            </View>
        );
    }
}

export default SearchInputField;