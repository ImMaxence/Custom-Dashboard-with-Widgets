import React, { useState, useEffect } from 'react';
import axios from "axios";

const Request_news = () => {
    const [country, setCountry] = useState('FR');
    const [data, setData] = useState([]);
    const [isSet, setIsSet] = useState(false);

    const returnDefault = () => {
        return (
            <>
                <div className="news_container_0">
                    <div className="news_news">
                        <input maxLength={5} type="text" placeholder="FR, US..." onChange={e => setCountry(e.target.value)} />
                        <button onClick={handleSubmit}>Search</button>
                    </div>
                </div>
            </>
        );
    }

    const returnPerso = () => {
        const listItems = data.map((myList, index) =>
            <div className='each_news' key={index.id}>
                <div className="header_news">
                    <div className='head_ne'>
                        {myList.source}
                        <span id='author_news'>{myList.author}</span>

                    </div>
                    <div>
                        {myList.title}
                    </div>
                </div>
                <div className="reste_news">
                    <div className="desc">
                        {myList.description}
                    </div>
                    <div className='url_news'>
                        {myList.url}
                    </div>
                    <div className='date_news'>
                        {myList.publishedAt}
                    </div>
                </div>
            </div>

        );
        return (
            <>
                <div className="news_container">
                    <ul> {listItems} </ul>
                </div>


            </>
        );
    }


    const handleSubmit = () => {
        axios
            .get("http://localhost:8080/news/?country=" + country)
            .then((response) => {
                let newsArray = [];
                let numberOfNews = Object.keys(response.data.articles).length;
                for (let n = 0; n < numberOfNews; n++) {
                    let obj = {
                        "source": response.data.articles[n].source.name,
                        "author": response.data.articles[n].author,
                        "title": response.data.articles[n].title,
                        "description": response.data.articles[n].description,
                        "url": response.data.articles[n].url,
                        "publishedAt": response.data.articles[n].publishedAt
                    };
                    newsArray.push(obj);
                }
                setData(newsArray);
                setIsSet(true);
            });
    }

    return isSet ? returnPerso() : returnDefault();
};

export default Request_news;