import {
    Platform
} from 'react-native';
import { PlatformType } from './Enums.js';
import DeviceInfo from 'react-native-device-info';
import { NORWEGIAN_CULTURE } from './Constants';

getDeviceIdentifier = () => {
    return DeviceInfo.getUniqueID();
};

isIOS = () => {
    return Platform.OS === PlatformType.iOS;
};

isNorwegian = () => {
    if (DeviceInfo.getDeviceLocale() == NORWEGIAN_CULTURE) {
        return true;
    }

    return false;
};

getOSVersion = () => {
    return `${DeviceInfo.getSystemName()} ${DeviceInfo.getSystemVersion()}`;
};

getDeviceInformation = () => {
    return `${DeviceInfo.getManufacturer()} ${DeviceInfo.getModel()}`;
};

export { getDeviceIdentifier, getOSVersion, getDeviceInformation, isIOS, isNorwegian };
