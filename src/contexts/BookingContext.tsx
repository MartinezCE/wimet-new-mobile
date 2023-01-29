import { eachMinuteOfInterval, format, set, startOfDay } from 'date-fns';
import { createContext, ReactNode, useMemo, useState } from 'react';
import { DropdownSelectItem } from '../components/DropdownSelect';
import { ReservationType, WPMReservationTypeSelect } from '../services/api';
import useGetWPMReservationTypes from '../services/hooks/useGetWPMReservationTypes';
import useAllLocations from '../services/hooks/useLocations';
import {
    BlueprintSelect,
    FloorSelect,
    LocationSelect,
    SeatSelect,
} from './types';

export const BookingContext = createContext({});

interface Props {
    children: ReactNode;
}

export const BookingProvider = ({ children }: Props) => {
    const [bookingType, setBookingType] = useState<ReservationType>();
    const [selectedDate, setSelectedDate] = useState<Date>();
    const [selectedLocation, setSelectedLocation] =
        useState<LocationSelect | null>();
    const [selectedFloor, setSelectedFloor] = useState<FloorSelect | null>();
    const [selectedStartHour, setSelectedStartHour] =
        useState<DropdownSelectItem | null>();
    const [selectedFinishHour, setSelectedFinishHour] =
        useState<DropdownSelectItem | null>();
    const [selectedDuration, setSelectedDuration] =
        useState<WPMReservationTypeSelect>();
    const [selectedBlueprint, setSelectedBlueprint] =
        useState<BlueprintSelect | null>();
    const [marker, setMarker] = useState<SeatSelect | null>();

    const { data: allLocations = [] } = useAllLocations();
    const { data: reservavtionDurationTypes = [] } =
        useGetWPMReservationTypes();

    const locationsList = useMemo(
        () =>
            allLocations.map((location) => ({
                value: Number(location.id),
                label: String(location.name),
            })),
        [allLocations]
    );

    const locationFloorList = useMemo(
        () =>
            allLocations
                .find((location) => location.id === selectedLocation?.value)
                ?.floors.filter(
                    (floor) =>
                        !!floor.number &&
                        (floor.blueprints || []).length > 0 &&
                        floor.blueprints.some((b) => !!b.name)
                )
                .map((floor) => ({
                    ...floor,
                    value: floor.id,
                    label: `Piso ${floor.number}`,
                })) || [],
        [selectedLocation]
    );

    const timeSlots = useMemo(() => {
        if (!selectedDate) return;
        const today = startOfDay(new Date());
        const dateToReserve = startOfDay(selectedDate);
        const start = set(dateToReserve, { hours: 7 });
        const end = set(dateToReserve, { hours: 20 });
        return eachMinuteOfInterval({ start, end }, { step: 15 }).map((d) => ({
            label: format(d, 'HH:mm'),
            value: d,
        }));
    }, [selectedDate]);

    const blueprintOptions: BlueprintSelect[] = useMemo(
        () =>
            (selectedFloor?.blueprints || [])
                .filter((blueprint) => !!blueprint.url && !!blueprint.name)
                .map((blueprint) => ({
                    ...blueprint,
                    value: blueprint.id,
                    label: blueprint.name,
                })),
        [selectedFloor]
    );

    const currentBlueprint = useMemo(
        () =>
            (blueprintOptions || []).find(
                (blueprint) =>
                    blueprint.value.toString() === selectedBlueprint?.value
            ) || blueprintOptions[0],
        [blueprintOptions, selectedBlueprint]
    );

    const handleSelectBuilding = (building: LocationSelect) => {
        setSelectedLocation(building);
        setSelectedFloor(null);
    };

    const getLocation = (val: number) =>
        allLocations.find((item) => item.id == val);

    const enablePickPlace = useMemo(
        () =>
            selectedLocation?.value &&
            selectedFloor?.value &&
            selectedDate &&
            ((selectedStartHour?.value && selectedFinishHour?.value) ||
                selectedDuration?.value),
        [
            selectedLocation,
            selectedFloor,
            selectedStartHour,
            selectedFinishHour,
            selectedDuration?.value,
        ]
    );

    return (
        <BookingContext.Provider
            value={{
                bookingType,
                setBookingType,
                selectedDate,
                setSelectedDate,
                locationsList,
                selectedLocation,
                locationFloorList,
                selectedFloor,
                setSelectedFloor,
                handleSelectBuilding,
                selectedStartHour,
                setSelectedStartHour,
                selectedFinishHour,
                setSelectedFinishHour,
                selectedDuration,
                setSelectedDuration,
                reservavtionDurationTypes,
                timeSlots,
                currentBlueprint,
                enablePickPlace,
                marker,
                setMarker,
            }}
        >
            {children}
        </BookingContext.Provider>
    );
};
