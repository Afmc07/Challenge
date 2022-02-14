import styled from "styled-components";

export const Section = styled.section`
    width: 500px;
    height: 465px;
    border-radius: 10px;
    border-style: solid;
    border-color: #ADD8E6;
    margin-top: 20px;

    @media (max-width: 430px){
        width: 350px;
    }
`

export const Title = styled.h1`
    font-size: 20px;
    font-weight: 700;
    margin-top: 10px;
    color: #4f4d4d;
    width: 100%;
    text-align: center;
    height: 30px;
`

export const ListOfReposContainer = styled.div`
    height: 350px;
    width: 100%;
    padding: 10px;
    overflow-y: scroll;
    overflow-x: hidden;
`

export const Repo = styled.h2`
    width: 95%;
    height: 160px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 5px;
    border-style: solid;
    border-color: #ADD8E6;
    color: #4f4d4d;

    h2 {
        font-size: 15px;
        width: 100%;
        overflow: hidden;
        color: #4f4d4d;
        text-decoration-line: underline;
    }

    h3{
        font-size: 13px;
        width: 100%;
        overflow: hidden;
        color: #4f4d4d;
    }

    p{
        font-size: 12px;
        font-weight: 400;
        color: #4f4d4d;
        width: 100%;
        height: 30px;
        overflow: hidden;
        line-height: 1.3;
        margin-top: 5px;
    }

    h2:hover{
        cursor: pointer;
    }
`

export const UnFav = styled.button`
    border-style: solid;
    background: #4f4d4d;
    border-radius: 10px;
    background: #4f4d4d;
    width: 30px;
    height: 30px;
    color: #FFF;
    transition: ease .2s;
    float: right;

    &:hover{
        transform: scale(1.2);
        transition: ease 0.2s;
        background: #A30000;
        cursor: pointer;
    }
`