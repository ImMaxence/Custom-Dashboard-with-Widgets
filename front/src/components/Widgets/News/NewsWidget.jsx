import React, { useState, useEffect } from "react";
import axios from "axios";
import WidgetCard from "./CardNews";
function WidgetNews() {
  const [data, setData] = useState([]);

  const click = async () => {
    await axios
      .get("http://localhost:8080/news?country=FR")
      .then((response) => {
        setData(response.data.articles);
      })
      .catch((error) => {
        console.log(error);
      });
    data.map((value, index) => {
      console.log(value.title);
    });
  };

  return (
    <div>
      <button onClick={click}>Bouton</button>
      {data.map((value, index) => {
        return <WidgetCard value={value} />;
      })}
    </div>
  );
}
export default WidgetNews;
