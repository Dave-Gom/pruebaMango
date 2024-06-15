import AsyncStorage from '@react-native-async-storage/async-storage';
import {AxiosError, AxiosResponse, InternalAxiosRequestConfig} from 'axios';

export const interceptorResponse = (error: AxiosError<any>) => {
  if (error.request.status === 401) {
    AsyncStorage.removeItem('token');
  }
};

export const onFulfilledInterceptor = (response: AxiosResponse<any>) => {
  return response;
};

export const requestInteceptor = (config: InternalAxiosRequestConfig<any>) => {
  return config;
};
