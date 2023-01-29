import { DropdownSelectItem } from '../components/DropdownSelect';
import {
    Location,
    Blueprint,
    Floor,
    ReservationType,
    WPMReservationTypeSelect,
} from '../services/api';

export type BookingContextType = {
    bookingType: ReservationType;
    setBookingType: (value: ReservationType) => void;
    selectedDate: Date;
    setSelectedDate: (value: Date) => void;
    locationsList: DropdownSelectItem[];
    selectedLocation: LocationSelect;
    locationFloorList: DropdownSelectItem[];
    selectedFloor: FloorSelect;
    setSelectedFloor: (value: FloorSelect) => void;
    handleSelectBuilding: (value: LocationSelect) => void;
    selectedStartHour: DropdownSelectItem;
    setSelectedStartHour: (value: DropdownSelectItem) => void;
    selectedFinishHour: DropdownSelectItem;
    setSelectedFinishHour: (value: DropdownSelectItem) => void;
    selectedDuration: WPMReservationTypeSelect;
    setSelectedDuration: (value: WPMReservationTypeSelect) => void;
    reservavtionDurationTypes: WPMReservationTypeSelect[];
    timeSlots: DropdownSelectItem[];
    currentBlueprint: BlueprintSelect;
    enablePickPlace: boolean;
    marker: SeatSelect;
    setMarker: (valor: SeatSelect) => void;
};

export type LocationSelect = Location & DropdownSelectItem;
export type FloorSelect = Floor & DropdownSelectItem;
export type BlueprintSelect = Blueprint & DropdownSelectItem;
export type SeatSelect = { id: number; seatName: string };
