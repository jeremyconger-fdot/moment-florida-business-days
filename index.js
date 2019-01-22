const moment = require('moment-business-days');

const isNewYear = (aMoment) => {
    var newYearsDay = moment('01-01-2018', 'MM-DD-YYYY').year(aMoment.year());

    if (newYearsDay.day() === 0) {
        newYearsDay.add('1', 'days');
    } else if (newYearsDay.day() === 6) {
        return false;
    }

    return newYearsDay.format('l') === aMoment.format('l');
}

const isEndOfYearNewYear = (aMoment) => {
    var newYearsDay = moment('01-01-2018', 'MM-DD-YYYY').year(aMoment.year() + 1);

    if (newYearsDay.day() === 6) {
        newYearsDay.subtract('1', 'days');

        return newYearsDay.format('l') === aMoment.format('l');
    }

    return false;
}

const isIndependenceDay = (aMoment) => {
    var independenceDay = moment('07-04-2018', 'MM-DD-YYYY').year(aMoment.year());

    if (independenceDay.day() === 0) {
        independenceDay.add('1', 'days');
    } else if (independenceDay.day() === 6) {
        independenceDay.subtract('1', 'days');
    }

    return independenceDay.format('l') === aMoment.format('l');
}

const isLaborDay = (aMoment) => {
    var laborDay = moment('09-01-2018', 'MM-DD-YYYY').year(aMoment.year());
    while (laborDay.day() !== 1) {
        laborDay.add('1', 'days')
    }

    return laborDay.format('l') === aMoment.format('l');
}

const isMemorialDay = (aMoment) => {
    var memorialDay = moment('05-31-2018', 'MM-DD-YYYY').year(aMoment.year());
    while (memorialDay.day() !== 1) {
        memorialDay.subtract('1', 'days')
    }

    return memorialDay.format('l') === aMoment.format('l');
}

const isMlkJrDay = (aMoment) => {
    var mlkJrDay = moment('01-01-2018', 'MM-DD-YYYY').year(aMoment.year()).add('14', 'days');
    while (mlkJrDay.day() !== 1) {
        mlkJrDay.add('1', 'days')
    }

    return mlkJrDay.format('l') === aMoment.format('l');
}

const isThanksgivingDays = (aMoment) => {
    var thanksgivingDay = moment('11-22-2018', 'MM-DD-YYYY').year(aMoment.year());
    var dayAfterthanksgivingDay = moment('11-23-2018', 'MM-DD-YYYY').year(aMoment.year());
    while (thanksgivingDay.day() !== 4) {
        thanksgivingDay.add('1', 'days')
        dayAfterthanksgivingDay.add('1', 'days')
    }

    return thanksgivingDay.format('l') === aMoment.format('l') || dayAfterthanksgivingDay.format('l') === aMoment.format('l');
}

const isVeteransDay = (aMoment) => {
    var veteransDay = moment('11-11-2018', 'MM-DD-YYYY').year(aMoment.year());

    if (veteransDay.day() === 0) {
        veteransDay.add('1', 'days');
    } else if (veteransDay.day() === 6) {
        veteransDay.subtract('1', 'days');
    }

    return veteransDay.format('l') === aMoment.format('l');
}

const isChristmasDay = (aMoment) => {
    var christmasDay = moment('12-25-2018', 'MM-DD-YYYY').year(aMoment.year());

    if (christmasDay.day() === 0) {
        christmasDay.add('1', 'days');
    } else if (christmasDay.day() === 6) {
        christmasDay.subtract('1', 'days');
    }

    return christmasDay.format('l') === aMoment.format('l');
}

let config = {
    workingWeekdays: [1, 2, 3, 4, 5],
    holiday: (aMoment) => {
        return isNewYear(aMoment) || isMlkJrDay(aMoment) || isMemorialDay(aMoment) || isIndependenceDay(aMoment)
            || isLaborDay(aMoment) || isVeteransDay(aMoment) || isThanksgivingDays(aMoment) || isChristmasDay(aMoment) || isEndOfYearNewYear(aMoment);
    }
}

moment.updateLocale('us', config);

module.exports = moment;