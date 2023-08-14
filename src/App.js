import React, {useState} from 'react';
import {Route, Routes} from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import WorkTasksLoader from "./components/content/WorkTasksList/WorkTasksLoader";
import WorkTaskLoader from "./components/content/WorkTaskItem/WorkTaskLoader";

const App = () => {

    return (
        <div>
            <Header/>
            <Routes>
                <Route path="/" element={<WorkTasksLoader/>}/>
                <Route path="/work-tasks/get-by-id/:workTaskId" element={<WorkTaskLoader/>}/>
            </Routes>
            <Footer/>
        </div>
    );
};

export default App;