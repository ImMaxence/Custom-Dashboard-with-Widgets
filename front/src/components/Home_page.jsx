import { React, useState } from 'react';
import { ListComponent_s_gg } from './Buttons_Lists/ListComponent_s_gg';
import { ListComponent_dp } from './Buttons_Lists/ListComponent_dp';
import { ListComponent_nw } from './Buttons_Lists/ListComponent_nw';
import { ListComponent_rt } from './Buttons_Lists/ListComponent_rt';
import { ListComponent_s_gl } from './Buttons_Lists/ListComponent_s_gl';
import { ListComponent_s_gn } from './Buttons_Lists/ListComponent_s_gn';
import { ListComponent_s_gp } from './Buttons_Lists/ListComponent_s_gp';
import { ListComponent_wt } from './Buttons_Lists/ListComponent_wt';
import { ListComponent_wf } from './Buttons_Lists/ListComponent_wf';
import { Button_s_gg } from './Buttons_Lists/Button_s_gg';
import { Button_dp } from './Buttons_Lists/Button_dp';
import { Button_nw } from './Buttons_Lists/Button_nw';
import { Button_rt } from './Buttons_Lists/Button_rt';
import { Button_s_gl } from './Buttons_Lists/Button_s_gl';
import { Button_s_gn } from './Buttons_Lists/Button_s_gn';
import { Button_s_gp } from './Buttons_Lists/Button_s_gp';
import { Button_wf } from './Buttons_Lists/Button_wf';
import { Button_wt } from './Buttons_Lists/Button_wt';
import Welcome_page from './Welcome_page';

const Home_page = () => {

    let isOpen = false;

    const HiddenNav = () => {
        var hidden1 = document.getElementById('final');
        var hidden3 = document.getElementById('container_button_nav_hidden');
        var rotation = 180;

        if (!isOpen) {
            hidden1.style = "transform: translate(0%)";
            hidden3.style = "transform: rotate(" + rotation + "deg)";
            isOpen = true;
        } else {
            hidden1.style = "transform: translate(-93%)";
            rotation += 180;
            hidden3.style = "transform: rotate(" + rotation + "deg)";
            isOpen = false;
        }
    }

    const [component_s_gg, setComponent_S_GG] = useState([]);
    function addComponent_s_gg() {
        setComponent_S_GG([...component_s_gg, ""])
    }

    const [component_dp, setComponent_dp] = useState([]);
    function addComponent_dp() {
        setComponent_dp([...component_dp, ""])
    }

    const [component_nw, setComponent_nw] = useState([]);
    function addComponent_nw() {
        setComponent_nw([...component_nw, ""])
    }

    const [component_rt, setComponent_rt] = useState([]);
    function addComponent_rt() {
        setComponent_rt([...component_rt, ""])
    }

    const [component_s_gl, setComponent_s_gl] = useState([]);
    function addComponent_s_gl() {
        setComponent_s_gl([...component_s_gl, ""])
    }

    const [component_s_gn, setComponent_s_gn] = useState([]);
    function addComponent_s_gn() {
        setComponent_s_gn([...component_s_gn, ""])
    }

    const [component_s_gp, setComponent_s_gp] = useState([]);
    function addComponent_s_gp() {
        setComponent_s_gp([...component_s_gp, ""])
    }

    const [component_wf, setComponent_wf] = useState([]);
    function addComponent_wf() {
        setComponent_wf([...component_wf, ""])
    }

    const [component_wt, setComponent_wt] = useState([]);
    function addComponent_wt() {
        setComponent_wt([...component_wt, ""])
    }

    return (
        <>
            <div className='home_page'>
                <Welcome_page />
                <section id='final' className="final">
                    <div id='left_nav' className="left_nav">
                        <div className="logo_home">
                            <img src="./img/icon.png" alt="logo_not_load" />
                            <h1 id='title_home'>DASHBOARD</h1>
                        </div>
                        <div className="widget_service">
                            <nav>
                                <label for="touch">
                                    <span>WEATHER</span>
                                </label>
                                <input type="checkbox" id="touch" />
                                <ul class="slide">
                                    <li>
                                        <div className="div_button">
                                            <a><Button_wt onClick={addComponent_wt} text="Weather Today" /></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="div_button">
                                            <a><Button_wf onClick={addComponent_wf} text="Forecast 14 Days" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <label for="touch1">
                                    <span>REDDIT</span>
                                </label>
                                <input type="checkbox" id="touch1" />
                                <ul class="slide">
                                    <li>
                                        <div className="div_button">
                                            <a><Button_rt onClick={addComponent_rt} text="Thread" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <label for="touch2">
                                    <span>NEWS</span>
                                </label>
                                <input type="checkbox" id="touch2" />
                                <ul class="slide">
                                    <li>
                                        <div className="div_button">
                                            <a><Button_nw onClick={addComponent_nw} text="News" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <label for="touch3">
                                    <span>STEAM</span>
                                </label>
                                <input type="checkbox" id="touch3" />
                                <ul class="slide">
                                    <li>
                                        <div className="div_button">
                                            <a><Button_s_gp onClick={addComponent_s_gp} text="See Profile" /></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="div_button">
                                            <a><Button_s_gg onClick={addComponent_s_gg} text="See Your Games" /></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="div_button">
                                            <a><Button_s_gn onClick={addComponent_s_gn} text="See Last News" /></a>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="div_button">
                                            <a><Button_s_gl onClick={addComponent_s_gl} text="Last Game Played" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                            <nav>
                                <label for="touch4">
                                    <span>DISCORD</span>
                                </label>
                                <input type="checkbox" id="touch4" />
                                <ul class="slide">
                                    <li>
                                        <div className="div_button">
                                            <a><Button_dp onClick={addComponent_dp} text="My Profile" /></a>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className='div_hidden_nav'>
                        <div id="container_button_nav_hidden">
                            <button id='hidden_nav' onClick={HiddenNav}>></button>
                        </div>
                    </div>
                </section>
                <div id='right_drop' className="right_drop">
                    <div className="text_here">

                        {component_s_gg.map(() => (<ListComponent_s_gg />))}
                        {component_s_gl.map(() => (<ListComponent_s_gl />))}
                        {component_s_gn.map(() => (<ListComponent_s_gn />))}
                        {component_s_gp.map(() => (<ListComponent_s_gp />))}
                        {component_dp.map(() => (<ListComponent_dp />))}
                        {component_nw.map(() => (<ListComponent_nw />))}
                        {component_rt.map(() => (<ListComponent_rt />))}
                        {component_wf.map(() => (<ListComponent_wf />))}
                        {component_wt.map(() => (<ListComponent_wt />))}

                    </div>
                </div>
            </div>
        </>
    );
};

export default Home_page;
