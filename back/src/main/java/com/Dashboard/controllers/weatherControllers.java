package com.Dashboard.controllers;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

import java.util.*;

@RestController
public class weatherControllers {

    public String requestor(String url){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

    public String requestorCode(String url){
        RestTemplate restTemplate = new RestTemplate();
        String str = restTemplate.getForObject(url, String.class);
        System.out.println(str.length());
        if (str.length() > 2){
            return str.substring(10,15);
        }
        else {
            return null;
        }
    }

    //Weather
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "weather")
    public String getGames(@RequestParam(name = "commune") String commune ){
        String urlInsee = "https://geo.api.gouv.fr/communes?nom=" + commune + "&fields=code&boost=population&limit=1";
        String aa = requestorCode(urlInsee);
        if (aa != null) {
            String url = "https://api.meteo-concept.com/api/forecast/daily?insee=" + requestorCode(urlInsee) + "&start=0&end=14&token=79000fdc2fdfd9e34f981538b8410815a43f2cc9b6c79940fc266e388d5725b6";
            return requestor(url);
        }
        else {
            return ("false");
        }
    }
}