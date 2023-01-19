import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';


import './Roster.css';
import styled from "styled-components";
import StatsOfJeus from './Jeus/StatsOfJeus';
import MainOfJeus from './Jeus/MainOfJeus';
import StatsOfOner from './Oner/StatsOfOner';
import MainOfOner from './Oner/MainOfOner';
import StatsOfFaker from './Faker/StatsOfFaker';
import MainOfFaker from './Faker/MainOfFaker';
import StatsOfGumayusi from './Gumayusi/StatsOfGumayusi';
import MainOfGumayusi from './Gumayusi/MainOfGumayusi';
import StatsOfKeria from './Keria/StatsOfKeria';
import MainOfKeria from './Keria/MainOfKeria';



const Roster  = () => {
    const [click1, setClick1] = useState(false);
    const [click2, setClick2] = useState(false);
    const [click3, setClick3] = useState(false);
    const [click4, setClick4] = useState(false);
    const [click5, setClick5] = useState(false);
    
    /*     useEffect(()=>{
            첫 마운트시 메인 효과 실행 안되게
    },[]); */
   
    return(
        <div>
            <ul className="player-list">
                <li className="player-card jeus-image" >
                    
                { click1 ? <StatsOfJeus setClick={setClick1} /> : <MainOfJeus setClick={setClick1} /> }
                
                </li>

                <li className="player-card oner-image">

                { click2 ? <StatsOfOner setClick={setClick2} /> : <MainOfOner setClick={setClick2} /> }

                </li>

                <li className="player-card faker-image">

                { click3 ? <StatsOfFaker setClick={setClick3} /> : <MainOfFaker setClick={setClick3} /> }

                </li>

                <li className="player-card gumayusi-image">

                { click4 ? <StatsOfGumayusi setClick={setClick4} /> : <MainOfGumayusi setClick={setClick4} /> }

                </li>

                <li className="player-card keria-image">

                { click5 ? <StatsOfKeria setClick={setClick5} /> : <MainOfKeria setClick={setClick5} /> }

                </li>
            </ul>
            
        </div> 
    )
            
           
};


  
export default Roster;




