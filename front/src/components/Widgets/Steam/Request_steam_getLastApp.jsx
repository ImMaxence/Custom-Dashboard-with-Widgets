import React, { useState, useEffect } from 'react';
import axios from "axios";

const Request_steam_getLastApp = () => {
    const [steamId, setSteamId] = useState('');
    const [data, setData] = useState([]);
    const [isSet, setIsSet] = useState(false);

    const returnDefault = () => {
        return (
            <>
                <div className="container_sgg">
                    <div className='title_sgg'>
                        <label id='steam_id' htmlFor="steam_id">Steam ID</label>
                    </div>
                    <div className="flex_sgg">
                        <input id='steam_id' type="text" onChange={e => setSteamId(e.target.value)} />
                        <button onClick={handleSubmit}>Check</button>
                    </div>
                </div>
            </>
        );
    }

    const returnPerso = () => {
        return (
            <>
                <div className="container_slga">
                    <div className="big_slga">
                        <div className="flex_head">
                            <img src={data.img} />
                            <label id='title_head' >{data.gamename}</label><br />
                        </div>
                        <div className="reste_div_slga">
                            <label >Last 2 weeks : {data.playtime_2week}h</label><br />
                            <label >Total playtime : {data.playtime_forever}h</label>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const handleSubmit = () => {
        axios
            .get("http://localhost:8080/steam/getLastApp/?steamId=" + steamId)
            .then((response) => {

                let obj = {
                    "gamename": response.data.response.games[0].name,
                    "img": "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/" + response.data.response.games[0].appid + "/" + response.data.response.games[0].img_icon_url + ".jpg",
                    "playtime_forever": Number((response.data.response.games[0].playtime_forever / 60).toFixed(1)),
                    "playtime_2week": Number((response.data.response.games[0].playtime_2weeks / 60).toFixed(1))
                };

                setData(obj);
                setIsSet(true);
            });
    }

    return isSet ? returnPerso() : returnDefault();
};

export default Request_steam_getLastApp;