import React, { useState, useEffect } from 'react';
import axios from "axios";

const Request_meteo_forecast = () => {
    const [commune, setCommune] = useState('Marseille');
    const [data, setData] = useState([]);
    const [isSet, setIsSet] = useState(false);

    const returnPerso = () => {
        const listItems = data.map((myList, index) =>

            <div className='wid_f' key={index.id}>

                <div className="img_w">
                    <label>{myList.city}</label>
                    <img src={myList.image} />
                </div>
                <div className="today_inf">
                    <span id='date_t'>{myList.date}</span>
                    <span id='tmax_t'>{myList.tmax}°C</span>
                    <span id='tmin_t'>{myList.tmin}°C</span>
                </div>

            </div>

        );
        return (
            <>
                <div className="wid_today_3">
                    <div className="container_scroll">
                        <ul> {listItems} </ul>
                    </div>
                </div>
            </>
        );
    }

    const returnDefault = () => {


        return (
            <>
                <div className="wid_today_3">
                    <div className="cherche_wt">
                        <input maxLength={20} type="text" onChange={(e) => setCommune(e.target.value)} />
                        <img src="../img/glass.png" onClick={handleSubmit} />
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
                let dataArray = [];
                for (let n = 0; n < 14; n++) {
                    let weather = "";
                    let variable = response.data.forecast[n].weather;
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

                    let Array_data = {
                        "city": commune,
                        "image": "../img/" + weather,
                        "date": new Date(response.data.forecast[n].datetime).toDateString(),
                        "tmin": response.data.forecast[n].tmin,
                        "tmax": response.data.forecast[n].tmax,
                    }
                    dataArray.push(Array_data);
                }
                setData(dataArray);
                setIsSet(true);
            });
    }

    return isSet ? returnPerso() : returnDefault();
};

export default Request_meteo_forecast;