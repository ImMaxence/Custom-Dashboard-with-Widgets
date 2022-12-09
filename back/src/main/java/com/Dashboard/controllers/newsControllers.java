package com.Dashboard.controllers;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class newsControllers {

    public String requestor(String url){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

    /*public void getToken(){
        String username = "TheMaxquent";
        String password = "2d*mt9$Qb9nxCgV";
        String clientId = "ISf7v_ZpFRj0OsRfK-S6RA";
        String clientSecret = "whkE76kaxgMNWVntE9cc8RaOJVp_oQ";
        String stringUrl = "https://www.reddit.com/api/v1/access_token";
        CredentialsProvider credentialsProvider = new CredentialsProvider();
        System.out.println();
    }*/

    //Weather
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "news")
    public String getGames(@RequestParam(name = "country") String country){
        String url = "https://newsapi.org/v2/top-headlines?country=" + country + "&apiKey=18cd86ab609e483594b757789935c6fb";
        return requestor(url);
    }
}

