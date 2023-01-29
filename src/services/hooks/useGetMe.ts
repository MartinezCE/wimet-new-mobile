import { useQuery } from 'react-query';
import { api, User } from '../api';

const GET_ME = 'GET_ME';

export const getMe = async () => {
    try {
        const { data: user } = await api.get<User>('/user/me');
        return user;
    } catch (e: any) {
        console.log(e);
        throw new Error(e.message);
    }
};

const useGetMe = () => useQuery(GET_ME, getMe);

export default useGetMe;
