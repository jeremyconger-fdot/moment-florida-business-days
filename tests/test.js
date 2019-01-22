const moment = require('../index');

test('Is Tuesday a Business Day', () => {
    const tuesday = moment().startOf('week').add(2, 'days');
    expect(tuesday.isBusinessDay()).toBe(true);
});

test('Is Sunday not a Business Day', () => {
    const tuesday = moment().startOf('week');
    expect(tuesday.isBusinessDay()).toBe(false);
});

test('Is Christmas Not A Business Day', () => {
    let christmas = moment('12-25-2020', 'MM-DD-YYYY');
    expect(christmas.isBusinessDay()).toBe(false);

    christmas = moment('12-25-2019', 'MM-DD-YYYY');
    expect(christmas.isBusinessDay()).toBe(false);

    christmas = moment('12-25-2018', 'MM-DD-YYYY');
    expect(christmas.isBusinessDay()).toBe(false);

    christmas = moment('12-25-2017', 'MM-DD-YYYY');
    expect(christmas.isBusinessDay()).toBe(false);

    christmas = moment('12-25-2016', 'MM-DD-YYYY');
    expect(christmas.isBusinessDay()).toBe(false);

    christmas = moment('12-25-2015', 'MM-DD-YYYY');
    expect(christmas.isBusinessDay()).toBe(false);
});

test('Is MlkJr Not A Business Day', () => {
    let mlkJr = moment('01-18-2016', 'MM-DD-YYYY');
    expect(mlkJr.isBusinessDay()).toBe(false);

    mlkJr = moment('01-16-2017', 'MM-DD-YYYY');
    expect(mlkJr.isBusinessDay()).toBe(false);

    mlkJr = moment('01-15-2018', 'MM-DD-YYYY');
    expect(mlkJr.isBusinessDay()).toBe(false);

    mlkJr = moment('01-21-2019', 'MM-DD-YYYY');
    expect(mlkJr.isBusinessDay()).toBe(false);

    mlkJr = moment('01-20-2020', 'MM-DD-YYYY');
    expect(mlkJr.isBusinessDay()).toBe(false);

    mlkJr = moment('01-18-2021', 'MM-DD-YYYY');
    expect(mlkJr.isBusinessDay()).toBe(false);
});

test('Is Memorial Day Not A Business Day', () => {
    let memorialDay = moment('05-30-2016', 'MM-DD-YYYY');
    expect(memorialDay.isBusinessDay()).toBe(false);

    memorialDay = moment('05-29-2017', 'MM-DD-YYYY');
    expect(memorialDay.isBusinessDay()).toBe(false);

    memorialDay = moment('05-28-2018', 'MM-DD-YYYY');
    expect(memorialDay.isBusinessDay()).toBe(false);

    memorialDay = moment('05-27-2019', 'MM-DD-YYYY');
    expect(memorialDay.isBusinessDay()).toBe(false);

    memorialDay = moment('05-25-2020', 'MM-DD-YYYY');
    expect(memorialDay.isBusinessDay()).toBe(false);

    memorialDay = moment('05-31-2021', 'MM-DD-YYYY');
    expect(memorialDay.isBusinessDay()).toBe(false);
});

test('Is Independence Day Not A Business Day', () => {
    let independenceDay = moment('07-04-2016', 'MM-DD-YYYY');
    expect(independenceDay.isBusinessDay()).toBe(false);

    independenceDay = moment('07-04-2017', 'MM-DD-YYYY');
    expect(independenceDay.isBusinessDay()).toBe(false);

    independenceDay = moment('07-04-2018', 'MM-DD-YYYY');
    expect(independenceDay.isBusinessDay()).toBe(false);

    independenceDay = moment('07-04-2019', 'MM-DD-YYYY');
    expect(independenceDay.isBusinessDay()).toBe(false);

    independenceDay = moment('07-03-2020', 'MM-DD-YYYY');
    expect(independenceDay.isBusinessDay()).toBe(false);

    independenceDay = moment('07-04-2021', 'MM-DD-YYYY');
    expect(independenceDay.isBusinessDay()).toBe(false);
});

test('Is Labor Day Not A Business Day', () => {
    let laborDay = moment('09-05-2016', 'MM-DD-YYYY');
    expect(laborDay.isBusinessDay()).toBe(false);

    laborDay = moment('09-04-2017', 'MM-DD-YYYY');
    expect(laborDay.isBusinessDay()).toBe(false);

    laborDay = moment('09-03-2018', 'MM-DD-YYYY');
    expect(laborDay.isBusinessDay()).toBe(false);

    laborDay = moment('09-02-2019', 'MM-DD-YYYY');
    expect(laborDay.isBusinessDay()).toBe(false);

    laborDay = moment('09-07-2020', 'MM-DD-YYYY');
    expect(laborDay.isBusinessDay()).toBe(false);

    laborDay = moment('09-06-2021', 'MM-DD-YYYY');
    expect(laborDay.isBusinessDay()).toBe(false);
});

test('Is Veterans Day Not A Business Day', () => {
    let veteransDay = moment('11-11-2016', 'MM-DD-YYYY');
    expect(veteransDay.isBusinessDay()).toBe(false);

    veteransDay = moment('11-10-2017', 'MM-DD-YYYY');
    expect(veteransDay.isBusinessDay()).toBe(false);

    veteransDay = moment('11-12-2018', 'MM-DD-YYYY');
    expect(veteransDay.isBusinessDay()).toBe(false);

    veteransDay = moment('11-11-2019', 'MM-DD-YYYY');
    expect(veteransDay.isBusinessDay()).toBe(false);

    veteransDay = moment('11-11-2020', 'MM-DD-YYYY');
    expect(veteransDay.isBusinessDay()).toBe(false);

    veteransDay = moment('11-11-2021', 'MM-DD-YYYY');
    expect(veteransDay.isBusinessDay()).toBe(false);
});

test('Is Thanksgiving Day Not A Business Day', () => {
    let thanksgivingDay = moment('11-24-2016', 'MM-DD-YYYY');
    expect(thanksgivingDay.isBusinessDay()).toBe(false);

    thanksgivingDay = moment('11-23-2017', 'MM-DD-YYYY');
    expect(thanksgivingDay.isBusinessDay()).toBe(false);

    thanksgivingDay = moment('11-22-2018', 'MM-DD-YYYY');
    expect(thanksgivingDay.isBusinessDay()).toBe(false);

    thanksgivingDay = moment('11-28-2019', 'MM-DD-YYYY');
    expect(thanksgivingDay.isBusinessDay()).toBe(false);

    thanksgivingDay = moment('11-26-2020', 'MM-DD-YYYY');
    expect(thanksgivingDay.isBusinessDay()).toBe(false);

    thanksgivingDay = moment('11-25-2021', 'MM-DD-YYYY');
    expect(thanksgivingDay.isBusinessDay()).toBe(false);
});

test('Is Day After Thanksgiving Day Not A Business Day', () => {
    let dayAfterThanksgivingDay = moment('11-25-2016', 'MM-DD-YYYY');
    expect(dayAfterThanksgivingDay.isBusinessDay()).toBe(false);

    dayAfterThanksgivingDay = moment('11-24-2017', 'MM-DD-YYYY');
    expect(dayAfterThanksgivingDay.isBusinessDay()).toBe(false);

    dayAfterThanksgivingDay = moment('11-23-2018', 'MM-DD-YYYY');
    expect(dayAfterThanksgivingDay.isBusinessDay()).toBe(false);

    dayAfterThanksgivingDay = moment('11-29-2019', 'MM-DD-YYYY');
    expect(dayAfterThanksgivingDay.isBusinessDay()).toBe(false);

    dayAfterThanksgivingDay = moment('11-27-2020', 'MM-DD-YYYY');
    expect(dayAfterThanksgivingDay.isBusinessDay()).toBe(false);

    dayAfterThanksgivingDay = moment('11-26-2021', 'MM-DD-YYYY');
    expect(dayAfterThanksgivingDay.isBusinessDay()).toBe(false);
});

test('Is New Years Day Not A Business Day', () => {
    let newYearsDay = moment('01-01-2016', 'MM-DD-YYYY');
    expect(newYearsDay.isBusinessDay()).toBe(false);

    newYearsDay = moment('01-02-2017', 'MM-DD-YYYY');
    expect(newYearsDay.isBusinessDay()).toBe(false);

    newYearsDay = moment('01-01-2018', 'MM-DD-YYYY');
    expect(newYearsDay.isBusinessDay()).toBe(false);

    newYearsDay = moment('01-01-2019', 'MM-DD-YYYY');
    expect(newYearsDay.isBusinessDay()).toBe(false);

    newYearsDay = moment('01-01-2020', 'MM-DD-YYYY');
    expect(newYearsDay.isBusinessDay()).toBe(false);

    newYearsDay = moment('01-01-2021', 'MM-DD-YYYY');
    expect(newYearsDay.isBusinessDay()).toBe(false);

    newYearsDay = moment('12-31-2021', 'MM-DD-YYYY');
    expect(newYearsDay.isBusinessDay()).toBe(false);

    newYearsDay = moment('01-01-2022', 'MM-DD-YYYY');
    expect(newYearsDay.isBusinessDay()).toBe(false);
});