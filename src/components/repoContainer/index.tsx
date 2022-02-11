import { ReactChild, ReactFragment, ReactPortal } from 'react';
import { Section } from './styles'

const RepoContainer = (props: { children: boolean | ReactChild | ReactFragment | ReactPortal | null | undefined; }) => (
    <Section>
        {props.children}
    </Section>
);

export default RepoContainer;

