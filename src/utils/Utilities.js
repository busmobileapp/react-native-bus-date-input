import moment from 'moment';
import _ from 'lodash';

getFormattedDate = (dateString) => {
    return moment(new Date(dateString)).format("DD.MM.YYYY");
};

getDateForCalendar = (timestamp) => {
    let date = moment(timestamp);
    return {
        day: date.date(),
        month: date.month() + 1,
        year: date.year(),
        timestamp: timestamp,
        dateString: date.format("DD.MM.YYYY")
    };
};

export {
    getFormattedDate,
    getDateForCalendar
};