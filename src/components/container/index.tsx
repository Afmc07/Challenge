import { ReactChild, ReactFragment, ReactPortal } from "react";
import { Container } from "./styles";

const MainCont = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
    <Container>
        {props.children}
    </Container>
);

export default MainCont