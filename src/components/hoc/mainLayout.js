import React from 'react';
import {Container} from 'react-bootstrap';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const MainLayout = (props)=>{
    return (
        <Container className=''>
            {props.children}
            
            <ToastContainer/>
        </Container>
    )
}

export default MainLayout;