import {Md5} from 'ts-md5/dist/md5';

// settings for API
export const API_KEY = 'b54580f369a7eeebecb2004dc429d08f';
export const API_SECRET = 'fdd9e176c2d2e4bb';
export const API_SIG = Md5.hashStr(API_SECRET + 'api_key' + API_KEY + 'permswrite');
