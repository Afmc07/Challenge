import React, { useState, useContext } from 'react'

import { FiSearch } from 'react-icons/fi'
import { DiGithubBadge } from 'react-icons/di'

import {
    HeadSec,
    HeadTitle,
    HeadInputCont,
    HeadIn,
    HeadSearchButton
} from './styles'

import client from '../../services/client'
import { context } from '../../context'

const Header = () => {
    const ctxt = useContext(context)
    const [searchedValue, setSearchedValue] = useState('');

    async function getUser() {
        try{
            const response = await client.get(`/${searchedValue}`);
            const repos = await client.get(`/${searchedValue}/repos`);

            ctxt.setUserData(response.data);
            ctxt.setRepos(repos.data);
        }
        catch(err){
            console.log(err)
        }
    }
    return(
        <HeadSec>
            <HeadTitle>Github API Challenge <DiGithubBadge size={35}/></HeadTitle>
            <HeadInputCont>
                <HeadIn value={searchedValue} onChange={e => setSearchedValue(e.target.value)}/>

                <HeadSearchButton onClick={getUser}>
                    <FiSearch size={15}/>
                </HeadSearchButton>
            </HeadInputCont>
        </HeadSec>
    );
};

export default Header;