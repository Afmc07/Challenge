import { 
    Container,
    Name
} from "./styles";

const UserName = (props: { name: string | undefined; }) =>(
    <Container>
        <Name>{props.name}</Name>
    </Container>
);

export default UserName;