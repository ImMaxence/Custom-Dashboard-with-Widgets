import React from 'react';

const Button_s_gn = (props) => {

    return (

        <button className="AddButton" onClick={props.onClick}>{props.text}</button>

    );

}

export { Button_s_gn };