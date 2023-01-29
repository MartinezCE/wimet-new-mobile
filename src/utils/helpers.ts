import { toDate } from 'date-fns-tz';

export const orderReservationsByDate = (
    reservations: any[],
    type: string | number
) =>
    reservations.sort((a, b) => {
        const firstDate = toDate(new Date(a.startAt), {
            timeZone: a.destinationTz,
        });
        const secondDate = toDate(new Date(b.startAt), {
            timeZone: b.destinationTz,
        });

        const orderBy: any = {
            asc: firstDate > secondDate ? 1 : -1,
            desc: firstDate > secondDate ? -1 : 1,
        };

        return orderBy[type];
    });

export const isBeforeToday = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    return date.getTime() < today.getTime();
};

export const isEqualToday = (date: Date) => {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    date.setHours(0, 0, 0, 0);
    return date.getTime() == today.getTime();
};
