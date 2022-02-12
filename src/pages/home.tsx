import Container from "../components/container";
import Header from "../components/header";
import Repos from "../components/repoContainer";
import UserPfp from "../components/userPfp";
import UserName from "../components/userName";
import UserRepo from "../components/userRepos";

export default function Home(){
    return(
        <Container>
            <Header/>

            <Repos>
                <UserPfp url="https://avatars.githubusercontent.com/u/73647620?v=4" altText=""/>
                <UserName name="Andres Mejia"/>
                <UserRepo/>
            </Repos>

        </Container>
    )
}