import Container from "../components/container";
import Header from "../components/header";
import Main from "../components/mainContainer";
import UserPfp from "../components/userPfp";
import UserName from "../components/userName";
import UserRepo from "../components/userRepos";
import FavsContainer from "../components/favContainer";

import React, { useContext } from "react";
import { context } from "../context";

export default function Home(){
    const ctx = useContext(context);
    console.log("Home");
    console.log(ctx.favs);
    return(
        <Container>
            <Header/>
            <Main>
                <UserPfp url={ctx.userData?.avatar_url} altText={ctx.userData?.login}/>
                <UserName name={ctx.userData?.name}/>
                <UserRepo repos={ctx.userData?.public_repos} favs={ctx.favs}/>
            </Main>
            <FavsContainer favs={ctx.favs}/>
        </Container>
    )
}