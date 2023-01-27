import React from "react";
import apple from '../icons/apple.png';
import grape from '../icons/grape.png';
import watermelon from '../icons/watermelon.png';
import pineapple from '../icons/pineapple.png';


export default function Menubar() {
    const menuStyle = {
        backgroundColor : '#C4DEA3',
        position: 'fixed',
        width: '135px',
        height: '100%',
        left: '0px',
        top: '0px',
    };

    const barStyle = {
        position: 'absolute',
        width: '36.33px',
        height: '28.37px',
        left: '35px',
        top: '88px',
        cursor : 'pointer',
    };

    const bar1 = {
        width: '100%',
        height: '20%',
        borderRadius:'30px',
        background: 'white',
        position: 'absolute'
    }
    const bar2 = {
        width: '100%',
        height: '20%',
        borderRadius:'30px',
        background: 'white',
        position: 'absolute',
        top:'15px'
    }
    const appleIcon ={
        position: 'absolute',
        width: '50px',
        height: '50px',
        left: '45px',
        top: '256px',
        cursor : 'pointer',
    }
    const grapeIcon ={
        position: 'absolute',
        width: '50px',
        height: '50px',
        left: '45px',
        top: '383px',
        cursor : 'pointer',
    }
    const watermelonIcon ={
        position: 'absolute',
        width: '50px',
        height: '50px',
        left: '45px',
        top: '510px',
        cursor : 'pointer',
    }
    const pineappleIcon ={
        position: 'absolute',
        width: '50px',
        height: '50px',
        left: '45px',
        top: '637px',
        cursor : 'pointer',
    }


    return(
        <>
            <div style={menuStyle}>
                <label style={barStyle} htmlFor="icon">
                    <span style={bar1}></span>
                    <span style={bar2}></span>
                </label>
                <img src={apple} style={appleIcon} alt='apple'></img>
                <img src={grape} style={grapeIcon}></img>
                <img src={watermelon} style={watermelonIcon}></img>
                <img src={pineapple} style={pineappleIcon}></img>
            </div>
        </>
    )
}