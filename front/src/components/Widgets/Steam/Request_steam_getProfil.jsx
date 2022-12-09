import React, { useState, useEffect } from 'react';
import axios from "axios";

const Request_steam_getProfil = () => {
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
        console.log(data)
        return (
            <>
                <div className="container_sgp">
                    <div className="big_c_gp">
                        <img src={data.avatar} /><br />
                        <div className="reste_sgp">
                            <label >{data.pseudo}</label><br />
                            <label >{data.name}</label><br />
                            <label >{data.nationality}</label>
                            <div>
                                <a href={data.url}>
                                    See Profil
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </>
        );
    }

    const handleSubmit = () => {
        axios
            .get("http://localhost:8080/steam/getProfil/?steamId=" + steamId)
            .then((response) => {
                let obj = {
                    "pseudo": response.data.response.players[0].personaname,
                    "url": response.data.response.players[0].profileurl,
                    "avatar": response.data.response.players[0].avatarfull,
                    "name": response.data.response.players[0].realname,
                    "nationality": response.data.response.players[0].loccountrycode
                };
                setData(obj);
                setIsSet(true);
            });
    }

    return isSet ? returnPerso() : returnDefault();
};

export default Request_steam_getProfil;