import React, { PureComponent } from 'react';
import {
    View,
    Text,
    TouchableHighlight,
    Modal,
    TouchableOpacity,
    Image,
    Dimensions,
    ScrollView
} from 'react-native';
import {
    Line,
    TextInputIndicator,
} from '../Elements';
import styles from './ModalDateRangeInputStyles';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import images from '../../../images';
import { getFormattedDate, getDateForCalendar } from '../../utils/Utilities';

class ModalDateRangeInput extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            selectedFromDate: null,
            selectedToDate: null,
            showCalendar: false,
            isFromDate: false,
            minDate: null,
            maxDate: null,
            screen: Dimensions.get('window')
        }

        //Commented by GuruparanG[04/Dec/2018] As we are only using NO we are hardcoding this, 
        // if we plan to add multi language support we will have to change this
        LocaleConfig.locales['no'] = {
            monthNames: ['Januar', 'Februar', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'August', 'September', 'Oktober', 'November', 'Desember'],
            monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'Mai', 'Jun', 'Jul.', 'Aug', 'Sep', 'Okt', 'Nov', 'Des'],
            dayNames: ['Søndag', 'Mandag', 'Tirsdag', 'Onsdag', 'Torsdag', 'Fredag', 'Lørdag'],
            dayNamesShort: ['Sø', 'Ma', 'Ti', 'On', 'To', 'Fr', 'Lø']
        };

        LocaleConfig.defaultLocale = 'no';
    }

    dismiss = () => {
        this.onModalReset();
        this.props.dismiss();
    }

    onModalReset = () => {
        this.setState({ selectedFromDate: null, selectedToDate: null, showCalendar: false, isFromDate: false, minDate: null, maxDate: null });
    }

    onDatepickerSelect = (type) => {
        if (type === 'FromDate') {
            this.setState({ showCalendar: true, isFromDate: true, maxDate: this.state.selectedToDate, minDate: null });
        }
        else if (type == 'ToDate') {
            this.setState({ showCalendar: true, isFromDate: false, minDate: this.state.selectedFromDate, maxDate: null });
        }
    }

    onDateSelect = (day) => {
        if (this.state.isFromDate) {
            this.setState({ selectedFromDate: day, showCalendar: false });
        }
        else {
            this.setState({ selectedToDate: day, showCalendar: false });
        }
    }

    onApplyButtonPress = () => {
        this.props.onApplyButtonPress(this.state.selectedFromDate ? this.state.selectedFromDate.timestamp : null, this.state.selectedToDate ? this.state.selectedToDate.timestamp : null);
        this.onModalReset();
    }

    validate = () => {
        if (!this.props.bothRequired && (this.state.selectedFromDate || this.state.selectedToDate)) {
            return false;
        }
        else if (this.props.isToDateRequired && this.state.selectedFromDate && this.state.selectedToDate) {
            return false;
        }
        else if (!this.props.isToDateRequired && this.state.selectedFromDate) {
            return false;
        }
        else {
            return true;
        }
    }

    onLayout = () => {
        this.setState({ screen: Dimensions.get('window') });
    }

    getStyle = () => {
        if (this.state.screen.width > this.state.screen.height) {
            return { menuParentContainer: styles.menuParentLandscapeContainer };
        }
        else {
            return { menuParentContainer: styles.menuParentContainer };
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.fromDate || nextProps.toDate) {
            const fromDate = nextProps.fromDate ? getDateForCalendar(nextProps.fromDate) : null;
            const toDate = nextProps.toDate ? getDateForCalendar(nextProps.toDate) : null;
            this.setState({
                minDate: fromDate,
                selectedFromDate: fromDate,
                maxDate: toDate,
                selectedToDate: toDate
            });
        }
    }

    render() {
        const isApplyButtonDisabled = this.validate();
        return (
            <Modal
                animationType="fade"
                transparent={true}
                visible={this.props.visible}
                style={styles.extendedMenu}
                onLayout={this.onLayout}
                supportedOrientations={['portrait', 'landscape']}
                onRequestClose={() => this.dismiss()}>
                <TouchableHighlight style={styles.modalBackground} onPress={() => this.dismiss()} underlayColor={"transparent"}>
                    <View />
                </TouchableHighlight>
                <View style={this.getStyle().menuParentContainer} >
                    <View style={styles.splitContainer}>
                        <View style={styles.splitInnerContainer}>
                            <Text style={styles.modalHeading}>{this.props.name}</Text>
                        </View>
                        <TouchableOpacity style={styles.splitInnerRightContainer} onPress={() => this.onModalReset()} >
                            <Text style={styles.resetButon}>{'Nullstill'}</Text>
                        </TouchableOpacity>
                    </View>
                    <Line style={styles.line} />
                    <ScrollView>
                        <View style={styles.splitContainer}>
                            <View style={styles.splitInnerContainer}>
                                <Text style={styles.dateLabelText}>{'Fra'}</Text>
                                <TouchableOpacity style={styles.dateFieldContainer} onPress={() => this.onDatepickerSelect('FromDate')}>
                                    <TextInputIndicator style={styles.dateInputIndicator}>
                                        <Text style={styles.dateInput} >{this.state.selectedFromDate ? getFormattedDate(this.state.selectedFromDate.timestamp) : ''} </Text>
                                        <Image style={styles.calendarIcon} source={images.icons.iconCalendar} />
                                    </TextInputIndicator>
                                </TouchableOpacity>
                            </View>
                            <View style={styles.splitInnerContainer}>
                                <Text style={styles.dateLabelText}>{'Til'}</Text>
                                <TouchableOpacity style={styles.dateFieldContainer} onPress={() => this.onDatepickerSelect('ToDate')}>
                                    <TextInputIndicator style={styles.dateInputIndicator}>
                                        <Text style={styles.dateInput} >{this.state.selectedToDate ? getFormattedDate(this.state.selectedToDate.timestamp) : ''}</Text>
                                        <Image style={styles.calendarIcon} source={images.icons.iconCalendar} />
                                    </TextInputIndicator>
                                </TouchableOpacity>
                            </View>
                        </View>

                        {this.state.showCalendar &&
                            <Calendar
                                onDayPress={(day) => this.onDateSelect(day)}
                                maxDate={this.state.maxDate}
                                minDate={this.state.minDate}
                                style={{ width: 300, marginLeft: 'auto', marginRight: 'auto', marginTop: 10 }}
                            />
                        }

                        <TouchableOpacity style={isApplyButtonDisabled ? styles.buttonDisabledContainer : styles.buttonEnabledContainer} onPress={() => this.onApplyButtonPress()} disabled={isApplyButtonDisabled}>
                            <Text style={isApplyButtonDisabled ? styles.buttonDisabledText : styles.buttonEnabledText}>{'Bruk'}</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </View>
            </Modal>
        );
    }
}

export default ModalDateRangeInput;