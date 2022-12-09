package com.Dashboard.controllers;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.springframework.http.*;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.client.RestTemplate;

import java.io.*;
import java.net.*;
//import java.net.http.*;
import java.util.HashMap;
import java.util.Objects;

@RestController
public class discordControllers {
    private String token = "";
    private String requestor_token(String url, String code){
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        headers.setContentType(MediaType.APPLICATION_FORM_URLENCODED);
        MultiValueMap<String, String> map= new LinkedMultiValueMap<String, String>();
        map.add("client_id", "1040222453059833866");
        map.add("client_secret", "WkXaDb740ue5ZlMIQ-BLTHZ_qZU0qf9v");
        map.add("code", code);
        map.add("redirect_uri", "http://localhost:8080/discord/");
        map.add("grant_type", "authorization_code");
        HttpEntity<MultiValueMap<String, String>> request = new HttpEntity<MultiValueMap<String, String>>(map, headers);
        ResponseEntity<String> response = restTemplate.postForEntity( url, request , String.class );
        token = Objects.requireNonNull(response.getBody()).substring(18,48);
        System.out.println(token);
        return response.getBody();
    }

    private String requestor(String url){
        HttpHeaders headers = new HttpHeaders();
        RestTemplate restTemplate = new RestTemplate();
        String bear = "Bearer " + token;
        System.out.println(bear);
        headers.add("Authorization", bear);
        HttpEntity<Void> requestEntity = new HttpEntity<>(headers);
        ResponseEntity<String> response = restTemplate.exchange( url, HttpMethod.GET, requestEntity, String.class );
        System.out.println(response.getBody());
        return response.getBody();
    }

    //Discord token
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "discord")
    public String getToken(@RequestParam(name = "code") String code) throws IOException, InterruptedException {
        String url = "https://discord.com/api/oauth2/token";
        return requestor_token(url,code);
    }

    //Discord profil OAuth
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "discord/getProfil")
    public String getProfil() throws IOException, InterruptedException {
        String url = "https://discord.com/api/users/@me";
        return requestor(url);
    }

    //Discord connection OAuth
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "discord/getConnection")
    public String getConnection() throws IOException, InterruptedException {
        String url = "https://discord.com/api//users/@me/connections";
        return requestor(url);
    }

    /*
    //Discord connection OAuth
    @CrossOrigin(origins = "http://localhost:3000")
    @GetMapping(value = "discord/test")
    public String getTest() throws IOException, InterruptedException {
        int test = 1;
        switch(test){
            case 1:
                return ("STAFF");
                break;
            case 1 << 1:
                return ("PARTNER");
                break;
            case 1 << 2:
                return ("HYPESQUAD");
                break;
            case 1 << 3:
                return ("BUG_HUNTER_LEVEL_1");
                break;
            case 1 << 6:
                return ("HYPESQUAD_ONLINE_HOUSE_1");
                break;
            case 1 << 7:
                return ("HYPESQUAD_ONLINE_HOUSE_2");
            break;
            case 1 << 8:
                return ("HYPESQUAD_ONLINE_HOUSE_3");
            break;
            case 1 << 9:
                return ("PREMIUM_EARLY_SUPPORTER");
            break;
            case 1 << 10:
                return ("TEAM_PSEUDO_USER");
            break;
            case 1 << 14:
                return ("BUG_HUNTER_LEVEL_2");
            break;
            case 1 << 16:
                return ("VERIFIED_BOT");
            break;
            case 1 << 17:
                return ("VERIFIED_DEVELOPER");
            break;
            case 1 << 18:
                return ("CERTIFIED_MODERATOR");
            break;
            case 1 << 19:
                return ("BOT_HTTP_INTERACTIONS");
            break;
            default:
                return ("NONE");
            break;
        }

    }*/

}