import { context } from '../../context';
import {
    Section,
    Title,
    ListOfReposContainer,
    Repo,
    UnFav
} from './styles'

import { FiFolder } from 'react-icons/fi';
import { FiFrown } from 'react-icons/fi';
import { useContext, useState} from 'react';
import { useNavigate } from 'react-router-dom';

const FavsContainer = (props: any) =>{
    const ctx = useContext(context);
    const [ffs, setffs] = useState(props.favs);
    const showFav:Boolean = ffs.length>0;

    function click(repo: any, favs: any, dir:string){
        remFav(repo, favs);
        handleOnclick(dir);
    }
    function remFav(repo: any, favs: any){
        var aux:Array<any> = favs
        var x:number = aux.indexOf(repo)
        
        aux.splice(x, 1);

        ctx.setFavs(aux);
        setffs(aux);
    }

    const history = useNavigate();
    function handleOnclick(dir:string){
        history(dir);
    }

    return (
        <Section>
            <Title>Your Fav Repositories <FiFolder size={20}/></Title>

            {showFav && <ListOfReposContainer>
                {(ffs).map((repo: { html_url: string; id: any; name: string | undefined; description: string | undefined; stargazers_count: string; forks_count: string; owner: any}) =>(
                    <Repo key={repo?.id}>
                        {repo?.name} by {repo?.owner.login}
                        <h2 onClick={() => window.location.href= repo?.html_url}>Go to Repository</h2> <UnFav onClick={() => click(repo, ffs, "/")}><FiFrown size={15}/></UnFav>
                        <h3>stars: {repo?.stargazers_count} forks: {repo?.forks_count}</h3>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>}
            
        </Section>
    );
}

export default FavsContainer;