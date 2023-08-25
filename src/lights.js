   import React, { useEffect, useState } from 'react';
   import { getLights, turnOnLight, turnOffLight } from './api';

   const Lights = () => {
     const [lights, setLights] = useState([]);

     useEffect(() => {
       const fetchLights = async () => {
         try {
           const response = await getLights();
           setLights(response.data);
         } catch (error) {
           console.error(error);
         }
       };

       fetchLights();
     }, []);

     const handleTurnOn = async (lightId) => {
       try {
         await turnOnLight(lightId);
         // Refresh the lights after turning on
         fetchLights();
       } catch (error) {
         console.error(error);
       }
     };

     const handleTurnOff = async (lightId) => {
       try {
         await turnOffLight(lightId);
         // Refresh the lights after turning off
         fetchLights();
       } catch (error) {
         console.error(error);
       }
     };

     return (
       <div>
         <h1>Lights</h1>
         {lights.map((light) => (
           <div key={light.id}>
             <h2>{light.name}</h2>
             <p>Status: {light.status}</p>
             <button onClick={() => handleTurnOn(light.id)}>Turn On</button>
             <button onClick={() => handleTurnOff(light.id)}>Turn Off</button>
           </div>
         ))}
       </div>
     );
   };

   export default Lights;