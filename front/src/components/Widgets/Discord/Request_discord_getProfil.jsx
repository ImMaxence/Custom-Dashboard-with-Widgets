import React, { useState, useEffect } from 'react';
import axios from "axios";

const Request_discord_getProfil = () => {
    const [isSet, setIsSet] = useState(false);
    const [username, setUsername] = useState('');
    const [avatar, setAvatar] = useState('');
    const [desc, setDesc] = useState('');

    const handleSubmit = () => {
        let url = "http://localhost:8080/discord/getProfil";
        axios
            .get(url)
            .then((response) => {
                setUsername(response.data.username);
                setAvatar("https://cdn.discordapp.com/avatars/" + response.data.id + "/" + response.data.avatar + ".webp?size=240");
                setDesc(response.data.discriminator);
            }
            );
        setIsSet(true);
    }

    const returnDefault = () => {
        return (
            <>
                <div className='discord_wid'>
                    <a id='see_discord' href="https://discord.com/api/oauth2/authorize?client_id=1040222453059833866&redirect_uri=http%3A%2F%2Flocalhost%3A8080%2Fdiscord%2F&response_type=code&scope=identify" onClick={handleSubmit} target="_blank" rel="noopener noreferrer">See my profil</a>
                </div>
            </>
        );
    }

    const returnPerso = () => {
        return (
            <>
                <div className="discord_wid_2">
                    <div className="prof_dis">
                        <div className="img_div_dis">
                            <img id='img_dis' src={avatar} />
                        </div>
                        <div className="flex_user_dis">
                            <span><a>Username :</a> {username}</span>
                            <span><a>Tag :</a> {username}#{desc}</span>
                        </div>
                    </div>
                    <button id='butt_dis' onClick={handleSubmit}>no response ? click me</button>
                </div>
            </>
        );
    }

    return isSet ? returnPerso() : returnDefault();
};

export default Request_discord_getProfil;