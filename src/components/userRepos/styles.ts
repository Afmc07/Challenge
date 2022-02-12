import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 80px;
    padding: 0 16px;
    display: flex;
    align-items: center;
    justify-center: space-between;
    margin-left: 185px;
    margin-bottom: 15px;
`

export const NumberContainer = styled.div`
    width: 100px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    transiton: linear 0.2s;

    h1{
        font-size: 18px;
        font-family: verdana;
        text-align: center;
        color: #4f4d4d;
    }

    h2{
        font-size: 15px;
        font-family: verdana;
        text-align: center;
        color: #4f4d4d;
    }

    &:hover{
        cursor: pointer;
        transiton: linear 0.2s;
        transform: scale(1.2)
    }
`