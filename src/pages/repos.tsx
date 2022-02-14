import React, {useContext} from "react";

import Container from '../components/container';
import ReposContainer from '../components/reposContainer';

import { context } from "../context";

const Repos = (props: any) => {
    const Ctxt = useContext(context); 
    return (
        <Container>
            <ReposContainer name={Ctxt.userData?.name} repos={[Ctxt.repos]} favs={Ctxt.favs}/>
        </Container>
    );
};

export default Repos;