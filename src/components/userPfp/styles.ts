import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    height: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Pfp = styled.img`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    border: 3px;
    border-style: solid;
    border-color: #ADD8E6;
    transition: linear 0.2s;
    margin-top: 18px;

    &:hover{
        transform: scale(1.1);
        transition: linear 0.2s;
    }
`