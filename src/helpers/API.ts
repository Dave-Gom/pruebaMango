import axios from 'axios';
import {appConfig} from '../config/config';
import {
  interceptorResponse,
  onFulfilledInterceptor,
  requestInteceptor,
} from './InterceptorFunctions';

const ApiAuth = axios.create({
  baseURL: appConfig.baseUrl,
  headers: {
    Accept: 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
  },
});

ApiAuth.interceptors.response.use(onFulfilledInterceptor, interceptorResponse);

ApiAuth.interceptors.request.use(requestInteceptor);

const ApiPublic = axios.create({
  baseURL: appConfig.baseUrl,
  headers: {
    Accept: 'application/x-www-form-urlencoded',
    'Content-Type': 'application/json',
  },
});

export {ApiAuth, ApiPublic};
