import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID wtd_o6DVfltOVPiSJx_2l5RM_rtGKl9Asp_fjRpd9GE'
    }
});