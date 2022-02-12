import React from "react";
import {
    BrowserRouter as BRouter,
    Routes,
    Route
} from 'react-router-dom';

import Home from './pages/home';
import Repos from "./pages/repos";

const routes = () => (
    <BRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/repos" element={<Repos />}/>
        </Routes>
    </BRouter>
);

export default routes