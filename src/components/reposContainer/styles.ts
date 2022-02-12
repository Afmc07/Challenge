import styled from "styled-components";

export const Section = styled.section`
    width: 500px;
    height: 425px;
    border-radius: 10px;
    border-style: solid;
    border-color: #ADD8E6;
    margin-top: 15px;

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
    height: 80px;
    border-radius: 5px;
    padding: 10px;
    border-radius: 10px;
    margin-bottom: 10px;
    border-style: solid;
    border-color: #ADD8E6;

    h2 {
        font-size: 15px;
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
        margin-top: 10px;
    }

    &:hover{
        cursor: pointer;
    }
`