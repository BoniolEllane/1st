import React from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Main from '/src/Main.jsx'

function Locate() {
    return (
        <div>
            <Routes>
                <Route path="/home"
                    element={
                        <>
                            <Main />
                        </>
                    }
                />
            </Routes>
        </div>
    )
}

export default Locate;