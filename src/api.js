   import axios from 'axios';

   const api = axios.create({
     baseURL: 'http://127.0.0.1:5000', // Replace with your Flask server URL
   });

   export const getLights = () => api.get('/lights');
   export const turnOnLight = (lightId) => api.post(`/lights/${lightId}/on`);
   export const turnOffLight = (lightId) => api.post(`/lights/${lightId}/off`);