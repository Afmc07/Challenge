import styled from "styled-components";

export const HeadSec = styled.header`
    width: 500px;
    height: 165px;
    margin-top: 25px;
    background: rgba(255,255,255, .2);
    border-radius: 10px;
    border-style: solid;
    border-color: #ADD8E6;
    display: flex;
    flex-direction: column;
`

export const HeadTitle = styled.h1`
    margin: 0;
    padding: 15px 0;
    color: #4f4d4d;
    font-size: 30px;
    font-weight: 700;
    font-family: verdana;
    text-align: center;
    width: 100%;
    transition: linear 0.2s;

    &:hover{
        transform: scale(1.2);
        transition: linear 0.2s;
        cursor: grab;
    }

    &:active{
        cursor: grabbing;
    }
`

export const HeadInputCont = styled.div`
    padding: 10px 16px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const HeadIn = styled.input`
    width: 150px;
    height: 30px;
    border-radius: 15px;
    border: solid;
    border-color: #ADD8E6;
    padding: 0 16px;
    color: #000000;
    transition: .4s ease;
    font-size: 15px;

    &:focus{
        border-color: #FFFFFF;
        width: 270px;
        transition: .4s ease;
    }
`

export const HeadSearchButton = styled.button`
    width: 40px;
    height: 40px;
    border-radius: 15px;
    border: none;
    background: #ADD8E6;
    margin-left: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #FFF;
    transition: ease .2s;

    &:hover{
        transform: scale(1.2);
        transition: ease 0.2s;
        background: #4f4d4d;
        cursor: pointer;
    }
`