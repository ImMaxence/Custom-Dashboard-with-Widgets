package com.Dashboard.controllers;


import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.client.RestTemplate;

@RestController
public class redditControllers {
    public String requestor(String url){
        RestTemplate restTemplate = new RestTemplate();
        return restTemplate.getForObject(url, String.class);
    }

    //Reddit thread
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "reddit")
    public String getGames(@RequestParam(name = "thread") String thread){
        String url = "https://www.reddit.com/r/" + thread + "/.json";
        return requestor(url);
    }

    //OAuth profil


}