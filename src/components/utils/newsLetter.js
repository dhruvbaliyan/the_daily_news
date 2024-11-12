import React, { useRef, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button } from 'react-bootstrap';
import { addNewsLetter } from '../../store/actions';
import { showToast } from './tools';

const NewsLetter = () => {
    const userData = useSelector(state => state.user);
    const dispatch = useDispatch();
    const emailADD = useRef();

    const handleSubmit = (e) => {
        e.preventDefault();
        const mail = emailADD.current.value;
        dispatch(addNewsLetter({ email: mail }));
    };

    useEffect(() => {
        if (userData.newsLetter) {
            if (userData.newsLetter === 'added') {
                showToast('SUCCESS', "Thank you for subscribing !!!");
                emailADD.current.value = "";
            }
            if (userData.newsLetter === 'failed') {
                showToast('ERROR', "You are already on the DB");
                emailADD.current.value = "";
            }
        }
    }, [userData]); 

    return (
        <>
            <div className='newsletter_container'>
                <h1>Join Our Newsletter</h1>
                <div className='form'>
                    <Form onSubmit={handleSubmit} className='mt-4'>
                        <Form.Group>
                            <Form.Control
                                type='text'
                                placeholder='Example: youremail@gmail.com'
                                name='email'
                                ref={emailADD}
                            />
                        </Form.Group>
                        <Button variant='primary' type='submit'>
                            Add Me in Group
                        </Button>
                    </Form>
                </div>
            </div>
        </>
    );
};

export default NewsLetter;
