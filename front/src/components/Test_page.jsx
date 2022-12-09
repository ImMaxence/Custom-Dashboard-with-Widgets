import React from 'react';
import Request_discord_getProfil from './Widgets/Discord/Request_discord_getProfil';
import Request_news from './Widgets/News/Request_news';
import Request_meteo_forecast from './Widgets/Weather/Request_meteo_forecast';
import Request_meteo_today from './Widgets/Weather/Request_meteo_today';
import Request_reddit from './Widgets/Reddit/Request_reddit';
import Request_steam_getGame from './Widgets/Steam/Request_steam_getGame';
import Request_steam_getLastApp from './Widgets/Steam/Request_steam_getLastApp';
import Request_steam_getNews from './Widgets/Steam/Request_steam_getNews';
import Request_steam_getProfil from './Widgets/Steam/Request_steam_getProfil';

const Test_page = () => {
    return (
        <>
            <div className="test_test">
                <Request_discord_getProfil />
                <Request_meteo_today />
                <Request_meteo_forecast />
                <Request_news />
                <Request_reddit />
                <Request_steam_getGame />
                <Request_steam_getLastApp />
                <Request_steam_getNews />
                <Request_steam_getProfil />
            </div>
        </>
    );
};

export default Test_page;