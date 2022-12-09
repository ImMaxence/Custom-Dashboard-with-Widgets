package com.Dashboard.controllers;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

@RestController
public class steamControllers {

    public String requestor(String url){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

    //Steam Games
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "steam/getGames")
    public String getGames(@RequestParam(name = "steamId") String steamId){
        String url = "http://api.steampowered.com/IPlayerService/GetOwnedGames/v0001/?key=7642899B502AB0212449940B884BDD48&steamid=" + steamId + "&format=json&include_appinfo=true";
        return requestor(url);
    }

    //Steam Profil ou OAuth
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "steam/getProfil")
    public String getProfil(@RequestParam(name = "steamId") String steamId){
        String url = "http://api.steampowered.com/ISteamUser/GetPlayerSummaries/v0002/?key=7642899B502AB0212449940B884BDD48&steamids=" + steamId;
        return requestor(url);
    }

    //Steam News
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "steam/getNews")
    public String getNews(@RequestParam(name = "gameId") String gameId, @RequestParam(name = "count") int count){
        String url = "http://api.steampowered.com/ISteamNews/GetNewsForApp/v0002/?key=7642899B502AB0212449940B884BDD48&appid=" + gameId + "&count=" + count + "&maxlength=300&format=json";
        return requestor(url);
    }

    //Steam LastAppOpened
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "steam/getLastApp")
    public String getLastApp(@RequestParam(name = "steamId") String steamId){
        String url = "http://api.steampowered.com/IPlayerService/GetRecentlyPlayedGames/v0001/?key=7642899B502AB0212449940B884BDD48&steamid=" + steamId + "&format=json&count=1";
        return requestor(url);
    }
}