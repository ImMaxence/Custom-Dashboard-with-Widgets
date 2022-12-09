import React from 'react';

const Button_wf = (props) => {

    return (

        <button className="AddButton" onClick={props.onClick}>{props.text}</button>

    );

}

export { Button_wf };