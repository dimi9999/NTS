// Import Data Using Axios

import axios from 'axios';

export default axios.create({
    baseURL: 'http://localhost:3000'
});