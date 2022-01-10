import axios from 'axios';

const KEY = 'AIzaSyCx0uA2bGp-5EPu6K8Mkt56nn-DYpO3AlU'; 


export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 5, 
        key: KEY
    }
});

