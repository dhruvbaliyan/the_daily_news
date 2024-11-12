import React from 'react';
import {BrowserRouter,Route,Routes } from 'react-router-dom';
import Home from './components/home/index';
import Header from './components/header';
import MainLayout from './components/hoc/mainLayout';
import PostComponent from './components/posts/index';
import Contact from './components/contact/index'
const Routess = ()=>(
    <BrowserRouter future={{ v7_relativeSplatPath: true, v7_startTransition: true }}>
        <Header/> 
        <MainLayout >
            <Routes>
                <Route path='/contact' Component={Contact}/>
                <Route path='/articles/:id' Component={PostComponent}/>
                <Route path='/' Component={Home} />
            </Routes>
        </MainLayout>
    </BrowserRouter>
)

export default Routess