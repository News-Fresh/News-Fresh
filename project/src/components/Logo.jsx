import React from "react";
import Icon from "../icons/logo.png"

export default function Logo() {
    const logoName = {
        position: 'absolute',
        height: '115px',
        left: '280px',
        //right: '50%',
        top: '40px',

        fontFamily: 'Piazzolla',
        fontStyle: 'normal',
        fontWeight: '700',
        fontSize: '70px',
        lineHeight: '99px',
        letterSpacing: '-1.13533px',
        color: '#83A558',
        textDecoration:'none'
    }

    const icon = {
        position: 'absolute',
        width: '100px',
        height: '100px',
        left: '170px',
        top: '30px',

    }
    const search = {
        border : 'none',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '10px 20px',
        gap: '8px',

        position: 'absolute',
        width: '600px', //*
        height: '30px', //*
        left: '765px',
        top: '65px', //*

        background: '#CDE3B2',
        borderRadius: '22px',
    }
    return(
    <>
        <img src={Icon} style={icon} alt="logo" />
        <a style={logoName} href="">
            NewsFresh
        </a>
        <input style={search} type="text" placeholder="Search..." />
    </>
    )
}