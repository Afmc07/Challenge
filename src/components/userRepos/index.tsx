import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
    Container,
    NumberContainer
} from './styles'

const UserRepo = (props: any) => {
    const history = useNavigate();
    function handleOnclick(dir:string){
        history(dir);
    }

    return(
    <Container>
        <NumberContainer onClick={() => handleOnclick('/repos')}>
            <h1>{props.repos}</h1>
            <h2>Repositories</h2>
        </NumberContainer>
    </Container>
    );
};

export default UserRepo;