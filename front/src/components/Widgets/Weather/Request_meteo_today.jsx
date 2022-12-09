import React, { useState, useEffect } from 'react';
import axios from "axios";

const Request_meteo_today = () => {
    const [commune, setCommune] = useState('Marseille');
    const [TMax, setTMax] = useState(0);
    const [TMin, setTMin] = useState(0);
    const [image, setImage] = useState('');
    const [date, setDate] = useState('');

    const [isSet, setIsSet] = useState(false);

    const returnPerso = () => {
        return (
            <>
                <div className='wid_today'>

                    <div className="img_w">
                        <label>{commune}</label>
                        <img id='temps_w' src={image} />
                    </div>

                    <div className="today_inf">
                        <span id='date_t'>{date}</span>
                        <span id='tmax_t'>{TMax}°C</span>
                        <span id='tmin_t'>{TMin}°C</span>
                    </div>

                </div>
            </>
        );
    }

    const returnDefault = () => {
        return (
            <>
                <div className='wid_today'>

                    <div className="cherche_wt">
                        <input maxLength={20} type="text" onChange={(e) => setCommune(e.target.value)} />
                        <img src="../img/glass.png" height="35px" onClick={handleSubmit} />
                    </div>
                </div>
            </>
        );
    }

    /* useEffect(() => {
             handleSubmit();
         const interval = setInterval(() => {
 
             handleSubmit();
 
         }, 10000);
         return () => clearInterval(interval);
     }, []);*/

    const handleSubmit = () => {
        let url = "http://localhost:8080/weather/?commune=" + commune;
        axios
            .get(url)
            .then((response) => {
                let weather = "";
                let variable = response.data.forecast[0].weather;
                if (variable === 0) {
                    weather = "soleil.png";
                }
                else if (variable >= 1 && variable <= 5) {
                    weather = "nuage.png";
                }
                else if (variable >= 6 && variable <= 7) {
                    weather = 'brume.png';
                }
                else if ((variable >= 10 && variable <= 16) || (variable >= 40 && variable <= 48) || (variable >= 210 && variable <= 212)) {
                    weather = "pluie.png";
                }
                else if ((variable >= 20 && variable <= 32) || (variable >= 60 && variable <= 78) || (variable >= 220 && variable <= 232)) {
                    weather = "neige.png";
                }
                else if (variable >= 100 && variable <= 142) {
                    weather = 'orage.png';
                }
                else {
                    weather = "grele.png";
                }
                setTMax(response.data.forecast[0].tmax);
                setTMin(response.data.forecast[0].tmin);
                setImage("../img/" + weather);
                setDate(new Date(response.data.forecast[0].datetime).toDateString());
                setIsSet(true);
            }
            );
    }

    return isSet ? returnPerso() : returnDefault();
};

export default Request_meteo_today;