import React, { useState, createContext } from "react";

export const context = createContext<any>('');

export const ContextProvider = (props: { children: boolean | React.ReactChild | React.ReactFragment | React.ReactPortal | null | undefined; }) => {
    const [userData, setUserData] = useState({});
    const [repos, setRepos] = useState({});

    return(
        <context.Provider value={{
            userData,
            repos,
            setUserData,
            setRepos
        }}>
            {props.children}
        </context.Provider>
    );
};