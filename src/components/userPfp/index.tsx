import {
    Container,
    Pfp
} from './styles'

const UserPfp = (props: { url: string | undefined, altText: string | undefined;}) => (
    <Container>
        <Pfp src={props.url} alt={props.altText}/>
    </Container>
);

export default UserPfp;