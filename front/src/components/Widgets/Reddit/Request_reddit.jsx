import React, { useState, useEffect } from 'react';
import axios from "axios";

const Request_reddit = () => {
  const [thread, setThread] = useState('FR');
  const [data, setData] = useState([]);
  const [isSet, setIsSet] = useState(false);

  const returnDefault = () => {
    return (
      <>
        <div className="container_reddit_0">
          <div className="red_red">
            <input id='steam_id' type="text" placeholder="Dofus..." onChange={e => setThread(e.target.value)} />
            <button onClick={handleSubmit}>Search</button>
          </div>
        </div>
      </>
    );
  }

  const returnPerso = () => {
    const listItems = data.map((myList, index) =>
      <div className='thread_r' key={index.id}>
        <div>{myList.title}</div>
        <div className="link_reddit">
          <a href={myList.url}>link</a>
          <div>
            <span>{myList.url}</span>
          </div>
        </div>
      </div>

    );
    return (
      <>
        <div className="container_reddit">
          <ul> {listItems} </ul>
        </div>
      </>
    );
  }

  const handleSubmit = () => {
    axios
      .get("http://localhost:8080/reddit/?thread=" + thread)
      .then((response) => {
        let redditArray = [];
        let numberOfNews = Object.keys(response.data.data.children).length;
        for (let n = 0; n < numberOfNews; n++) {
          let obj = {
            "title": response.data.data.children[n].data.title,
            "url": response.data.data.children[n].data.url,
          };
          redditArray.push(obj);
        }
        setData(redditArray);
        setIsSet(true);
      });
  }

  return isSet ? returnPerso() : returnDefault();
};

export default Request_reddit;