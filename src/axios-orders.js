import axios from 'axios';

import ENV from './env';

const instance = axios.create({
   baseURL: ENV.firebaseBaseURL
});

export default instance;