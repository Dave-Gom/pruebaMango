import { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { appConfig } from '../config/config';

export const interceptorResponse = (error: AxiosError<any>) => {
  console.log('ocurrio un error', error);
};

export const onFulfilledInterceptor = (response: AxiosResponse<any>) => {
  return response;
};

export const requestInteceptor = (config: InternalAxiosRequestConfig<any>) => {
  config.headers.Authorization = 'Bearer ' + appConfig.apiKey;
  return config;
};
