import { addDays, differenceInCalendarDays } from 'date-fns';

const isSameDay = (a, b) => {
    return differenceInCalendarDays(a, b) === 0;
};

export const getUnavailableDates = (id) => {
    const today = new Date();
    const unavailableDates = [];

    for (let i = 0; i < 5; i++) {
        unavailableDates[i] = addDays(today, id * i);
    }

    return unavailableDates;
};

export const setUnavailableDates =
    (unavailableDates) =>
    ({ date, view }) => {
        if (view === 'month') {
            const today = new Date();
            if (differenceInCalendarDays(today, date) > 0) {
                return true;
            }
            return unavailableDates.find((dDate) => isSameDay(dDate, date));
        }
    };
