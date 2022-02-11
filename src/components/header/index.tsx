import { FiSearch } from 'react-icons/fi'
import { DiGithubBadge } from 'react-icons/di'

import {
    HeadSec,
    HeadTitle,
    HeadInputCont,
    HeadIn,
    HeadSearchButton
} from './styles'

const Header = () => (
    <HeadSec>
        <HeadTitle>Github API Challenge <DiGithubBadge size={35}/></HeadTitle>
        <HeadInputCont>
            <HeadIn/>

            <HeadSearchButton>
                <FiSearch size={15}/>
            </HeadSearchButton>
        </HeadInputCont>
    </HeadSec>
);

export default Header;