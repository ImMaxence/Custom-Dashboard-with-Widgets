import React, { useState, useEffect } from 'react';
import axios from "axios";

const Request_steam_getGame = () => {
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
        const listItems = data.map((myList, index) =>
            <div className='each_sgg' key={index.id}>
                <div className="img_img"><img id='img_sgg' src={myList.img} /></div>
                <div className="text_sgg">{myList.gamename}
                    ({myList.playtime}h)</div>
            </div>

        );
        return (
            <>
                <div className="container_sgg_2">
                    <ul> {listItems} </ul>
                </div>

            </>
        );
    }


    const handleSubmit = () => {
        axios
            .get("http://localhost:8080/steam/getGames/?steamId=" + steamId)
            .then((response) => {
                let gamesSteamWidget = [];
                let numberOfGames = response.data.response.game_count;
                for (let n = 0; n < numberOfGames; n++) {
                    let obj = {
                        "gamename": response.data.response.games[n].name,
                        "img": "https://cdn.cloudflare.steamstatic.com/steamcommunity/public/images/apps/" + response.data.response.games[n].appid + "/" + response.data.response.games[n].img_icon_url + ".jpg",
                        "playtime": Number((response.data.response.games[n].playtime_forever / 60).toFixed(1))
                    };
                    gamesSteamWidget.push(obj);
                }
                setData(gamesSteamWidget);
                setIsSet(true);
            });
    }

    return isSet ? returnPerso() : returnDefault();
};

export default Request_steam_getGame;