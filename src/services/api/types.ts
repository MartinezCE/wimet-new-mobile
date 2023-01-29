export enum UserType {
    PARTNER = 'PARTNER',
    CLIENT = 'CLIENT',
}

export enum UserRole {
    ACCOUNT_MANAGER = 'ACCOUNT_MANAGER',
    TEAM_MANAGER = 'TEAM_MANAGER',
    MEMBER = 'MEMBER',
}

export enum UserStatus {
    PENDING = 'PENDING',
    APPROVED = 'APPROVED',
}

export enum ReservationType {
    SHARED = 'SHARED',
    MEETING_ROOM = 'MEETING_ROOM',
    PRIVATE_OFFICE = 'PRIVATE_OFFICE',
    PARKING = 'PARKING',
}

export enum BlueprintStatus {
    PENDING = 'PENDING',
    PUBLISHED = 'PUBLISHED',
    DRAFT = 'DRAFT',
}

export enum AmenityType {
    LOCATION = 'LOCATION',
    SPACE = 'SPACE',
    SAFETY = 'SAFETY',
    CUSTOM = 'CUSTOM',
}

export enum FileType {
    DOCUMENT = 'DOCUMENT',
    IMAGE = 'IMAGE',
}

export enum SpaceTypeEnum {
    SHARED = 'SHARED',
    MEETING_ROOM = 'MEETING_ROOM',
    PRIVATE_OFFICE = 'PRIVATE_OFFICE',
    PARKING = 'PARKING',
}

export enum WPMReservationTypes {
    DAYPASS = 'DAYPASS',
    MORNING = 'MORNING',
    AFTERNOON = 'AFTERNOON',
    CUSTOM = 'CUSTOM',
}

export type WPMReservationTypeSelect = {
    value: number;
    label: WPMReservationTypes;
};

export declare enum LocationStatus {
    PENDING = 'PENDING',
    IN_PROCESS = 'IN_PROCESS',
    PUBLISHED = 'PUBLISHED',
}

export enum SpaceReservationType {
    HOURLY = 'HOURLY',
    MONTHLY = 'MONTHLY',
}

export type Country = {
    id: number;
    iso3: string;
    name: string;
    currencyId: number;
    createdAt: string;
    updatedAt: string;
};

export type State = {
    id?: number;
    countryId?: number;
    country?: Country;
    name: string;
    createdAt?: Date;
    updatedAt?: Date;
};

export type Company = {
    id: number;
    name: string;
    companies_users: {
        companyId: number;
        userId: number;
        createdAt: string;
        updatedAt: string;
    }[];
    state: State;
    companyTypeId: number;
    stateId: number;
    peopleAmount?: number;
    feePercentage?: {
        id: number;
        value: number;
        companyId: number;
        createdAt: string;
        updatedAt: string;
        deletedAt?: string;
    } | null;
    websiteUrl?: string;
    tz: string;
    createdAt: string;
    updatedAt: string;
};

export type User = {
    id: number;
    firstName: string;
    lastName: string;
    password: string;
    phoneNumber: string;
    email: string;
    isWimetAdmin?: boolean;
    companies: Company[];
    createdAt: string;
    updatedAt: string;
    profileUrl: string;
    status?: UserStatus;
    userType: {
        id: number;
        value: UserType;
        createdAt: string;
        updatedAt: string;
    };
    userRole?: {
        id: number;
        value: UserRole;
        createdAt: string;
        updatedAt: string;
    };
    isWPMEnabled: boolean;
    avatarUrl: string;
    plans: unknown[];
};

export type SpaceFile = {
    id: number;
    spaceId: number;
    type: FileType;
    url: string;
    mimetype: string;
    name: string;
    key: string;
    createdAt: string;
    updatedAt: string;
};

export type Space = {
    id: number;
    name: string;
    tourUrl?: string;
    peopleCapacity: number;
    area: string;
    spaceOfferId?: number;
    createdAt: Date;
    updatedAt: Date;
    locationId: number;
    spaceTypeId: number;
    spaceReservationTypeId: number;
    order?: Number | null;
    spaceReservationType: {
        id: number;
        value: SpaceReservationType;
        createdAt: Date;
        updatedAt: Date;
    };
    location: Location;
    spacesAmenities: { [k in AmenityType]: Amenity[] };
    spaceFiles: {
        [key: string]: SpaceFile[];
    };
    spaceType: SpaceType;
    monthly: {
        id: number;
        price: number;
        minMonthsAmount: number;
        maxMonthsAmount: number;
        createdAt: Date;
        updatedAt: Date;
        spaceId: number;
        spaceDiscounts: {
            id: number;
            monthsAmount: number;
            spaceDiscountMonthlySpace: {
                percentage: string;
            };
        }[];
        spaceDeposits: {
            id: number;
            monthsAmount: number;
        }[];
    };
    hourly: Hourly[];
    averageCreditsWithFee: number;
    schedule?: SpaceSchedule[];
    percentage: string;
    nextNullField: string;
};

export type SpaceSchedule = {
    id?: number;
    dayOfWeek?: number;
    is24Open?: boolean;
    openTime?: string;
    closeTime?: string;
};

export type Hourly = {
    id: number;
    price: string;
    halfDayPrice: string;
    fullDayPrice: string;
    minHoursAmount: number;
    dayOfWeek: number;
    spaceId: number;
    dayCreditsWithFee: number;
    halfDayCreditsWithFee: number;
    fullDayCreditsWithFee: number;
    createdAt: Date;
    updatedAt: Date;
};

export type LocationFile = {
    id: number;
    locationId: number;
    type: FileType;
    url: string;
    mimetype: string;
    name: string;
    key: string;
    createdAt: string;
    updatedAt: string;
};

export type Location = {
    id: number;
    companyId: number;
    latitude?: string;
    longitude?: string;
    description?: string;
    address?: string;
    tourUrl?: string;
    comments?: string;
    accessCode?: string;
    status: LocationStatus;
    streetName: string;
    streetNumber: string;
    city: string;
    state: string;
    country: string;
    postalCode: string;
    createdAt: string;
    updatedAt: string;
    company: Company;
    currencyId: number;
    locationsAmenities: any; // TODO: fix types{ [k in AmenityType]: Amenity[] } | LocationAmenity[];
    locationFiles: {
        [key: string]: LocationFile[];
    };
    spaceCount?: {
        spaceTypeId: number;
        value: SpaceTypeEnum;
        count: number;
    }[];
    spaces?: Space[];
    percentage: string;
    nextNullField: string;
    stateId: number;
    name: string;
};

export type ClientLocation = Location & {
    floors: Floor[];
};

export type Floor = {
    id: number;
    locationId: number;
    number: number;
    blueprints: Blueprint[];
    location?: Location;
    createdAt: string;
    updatedAt: string;
};

export type Blueprint = {
    id: number;
    floorId: number;
    name: string;
    url: string;
    mimetype: string;
    key: string;
    status: BlueprintStatus;
    floor: Floor;
    seats?: Seat[];
    amenities?: Amenity[];
    createdAt: string;
    updatedAt: string;
};

export declare type Seat = {
    id: number;
    blueprintId: number;
    blueprint?: Blueprint;
    name: string;
    isAvailable?: boolean;
    geometry: {
        type: string;
        coordinates: [number, number];
    };
    WPMReservations?: WPMReservation[];
    amenities?: Amenity[];
    spaceTypeId: number;
    spaceType?: SpaceType;
    createdAt: string;
    updatedAt: number;
};

export type Amenity = {
    id: number;
    name: string;
    type: AmenityType;
    fileName: string;
    isDefault: boolean;
    seats: Seat[];
    blueprints?: Blueprint[];
    createdAt: string;
    updatedAt: string;
};

export type WPMReservation = {
    id: number;
    WPMReservationTypeId: number;
    WPMReservationType?: WPMReservationType;
    userId: number;
    user?: User;
    seatId: number;
    seat?: Seat;
    originTz: string;
    destinationTz: string;
    originOffset: number;
    destinationOffset: number;
    startAt: string;
    endAt: string;
    createdAt: string;
    updatedAt: string;
    status: string;
};

export type SpaceType = {
    id: number;
    value: SpaceTypeEnum;
    createdAt: Date;
    updatedAt: Date;
};

export type WPMReservationType = {
    id: number;
    name: WPMReservationTypes;
    createdAt: string;
    updatedAt: string;
};
