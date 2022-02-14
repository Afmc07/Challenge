import { context } from '../../context';
import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    Back,
    Fav
} from './styles'
import { useNavigate } from 'react-router-dom';


import { FiFolder } from 'react-icons/fi';
import { FiStar } from 'react-icons/fi';
import { useContext } from 'react';

const ReposContainer = (props: any) =>{
    const ctx = useContext(context)
    const history = useNavigate();
    function handleOnclick(dir:string){
        history(dir);
    }
    function newFav(repo: any, favs: any){
        if(favs.length>0){
            var aux= [...favs];
        }
        else{
            var aux = [];
        }
        
        aux.push(repo);
        ctx.setFavs(aux)
    }

    return (
        <Section>
            <Back onClick={() => handleOnclick('/')} >Return</Back>
            <Title>{(props.name)?.split(' ')[0]}'s Repositories <FiFolder size={20}/></Title>

            <ListOfReposContainer>
                {(props?.repos[0]).map((repo: { html_url: string; id: any; name: string | undefined; description: string | undefined; stargazers_count: string; forks_count: string;}) =>(
                    <Repo key={repo?.id}>
                        {repo?.name}
                        <h2 onClick={() => window.location.href= repo?.html_url}>Go to Repository</h2> <Fav onClick={() => newFav(repo, props.favs)}><FiStar size={15}/></Fav>
                        <h3>stars: {repo?.stargazers_count} forks: {repo?.forks_count}</h3>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
            
        </Section>
    );
}

export default ReposContainer;