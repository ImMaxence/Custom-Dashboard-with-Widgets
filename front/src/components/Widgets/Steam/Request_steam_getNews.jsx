import React, { useState, useEffect } from 'react';
import axios from "axios";

const Request_steam_getNews = () => {
    const [appId, setAppId] = useState('');
    const [count, setCount] = useState('');
    const [data, setData] = useState([]);
    const [isSet, setIsSet] = useState(false);

    const returnDefault = () => {
        return (
            <>
                <div className="container_sgg">
                    <div className="title_sgg">
                        <label id='steam_id' htmlFor="steam_id">App ID</label>
                    </div>
                    <input id='steam_id' type="text" onChange={e => setAppId(e.target.value)} />
                    <div className="title_sgg">
                        <br />
                        <label id='lab_gn' htmlFor="steam_id">Number News</label>
                    </div>
                    <input id='steam_id' type="text" onChange={e => setCount(e.target.value)} />
                    <button id='button_sn' onClick={handleSubmit}>Check</button>
                </div>
            </>
        );
    }

    const returnPerso = () => {
        const listItems = data.map((myList, index) =>
            <li key={index.id}>
                <label >{myList.title}</label><br />
                <label >{myList.author}</label><br />
                <label >{myList.source}</label><br />
                <a href={myList.url}>URL</a><br />
                <label >{myList.content}</label><br />
            </li>

        );
        return (
            <>
                <div className="container_sn">
                    <ul> {listItems} </ul>
                </div>
            </>
        );
    }

    const handleSubmit = () => {
        axios
            .get("http://localhost:8080/steam/getNews/?gameId=" + appId + "&count=" + count)
            .then((response) => {
                let newsSteamWidget = [];
                let numberOfNews = Object.keys(response.data.appnews.newsitems).length
                for (let n = 0; n < numberOfNews; n++) {
                    let obj = {
                        "title": response.data.appnews.newsitems[n].title,
                        "url": response.data.appnews.newsitems[n].url,
                        "author": response.data.appnews.newsitems[n].author,
                        "source": response.data.appnews.newsitems[n].feedlabel,
                        "content": response.data.appnews.newsitems[n].contents,
                    };
                    newsSteamWidget.push(obj);
                }
                setData(newsSteamWidget);
                setIsSet(true);
            });
    }

    return isSet ? returnPerso() : returnDefault();
};

export default Request_steam_getNews;