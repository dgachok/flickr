import {Md5} from 'ts-md5/dist/md5';

// settings for API
export const API_KEY = '044f699dc03d0a7b69fc51ebafa371c7';
export const API_SECRET = '15616604fa7a6d23';
export const API_SIG = Md5.hashStr(API_SECRET + 'api_key' + API_KEY + 'permswrite');
