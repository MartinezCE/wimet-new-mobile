import { useQuery } from 'react-query';
import { api, ClientLocation } from '../api';

export const GET_ALL_CLIENT_LOCATIONS = 'GET_ALL_CLIENT_LOCATIONS';

export const fetchAllLocations = async () => {
    try {
        const { data: location } = await api.get<ClientLocation[]>(
            '/clients-locations'
        );
        return location;
    } catch (e: any) {
        console.log(e,'Location')
        throw new Error(e.message);
    }
};

const useAllLocations = (queryOptions?: any) =>
    useQuery(GET_ALL_CLIENT_LOCATIONS, fetchAllLocations, { ...queryOptions });

export default useAllLocations;
