import {
    Section,
    Title,
    ListOfReposContainer,
    Repo
} from './styles'

const ReposContainer = (props: any) =>{
    console.log(props.repos)
    return (
        <Section>
            <Title>{(props.name)?.split(' ')[0]}'s Repositories</Title>

            <ListOfReposContainer>
                {(props?.repos[0]).map((repo: { html_url: string; id: any; name: string | undefined; description: string | undefined;}) =>(
                    <Repo onClick={() => window.location.href= repo?.html_url} key={repo?.id}>
                        <h2>{repo?.name}</h2>
                        <p>{repo?.description}</p>
                    </Repo>
                ))}
            </ListOfReposContainer>
            
        </Section>
    );
}

export default ReposContainer;