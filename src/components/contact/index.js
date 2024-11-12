import React from 'react';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-bootstrap';
import {useDispatch} from 'react-redux';
import { sendMessage } from '../../store/actions';
import { showToast } from '../utils/tools';
const Contact = () => {
    const dispatch = useDispatch();
    const phoneRegExp = /^[0-9]{10}$/; 
    const formik = useFormik({
        initialValues:{
            name:'',
            email:'',
            phone:'',
            message:''
        },
        validationSchema:Yup.object({
            name:Yup.string().required('Required'),
            email:Yup.string().required('Required').email('Invalid Email Address'),
            phone:Yup.string().required('Required').matches(phoneRegExp,'Phone number is not valid'),
            message:Yup.string().required('Required').max(500,'Message is too long')
        }),
        onSubmit:(values,{resetForm})=>{
            // console.log(values);
            dispatch(sendMessage(values)).then(({payload})=>{
                if(payload){
                    resetForm()
                    showToast('SUCCESS','Thank you, we will contact you back');
                }else{
                    showToast('ERROR','Sorry something happened, try again.');
                }
            });
        }
    })
    return(
        <>
           <form className="mt-3" onSubmit={formik.handleSubmit}>
            <div className="form-group mt-3 mb-3">
                <label htmlFor='name'>Name</label>
                <input
                    id='name'
                    name='name'
                    className="form-control"
                    type='text'
                    placeholder="Enter your name"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    value={formik.values.name}
                />
                {formik.touched.name && formik.errors.name ?
                    <Alert variant="danger">
                    {formik.errors.name}
                    </Alert>
                :null}
            </div>

            <div className="form-group mt-3 mb-3">
                <label htmlFor='email'>Email</label>
                <input
                    id='email'
                    name='email'
                    className="form-control"
                    type='email'
                    placeholder="email@example.com"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    value={formik.values.email}
                />
                {formik.touched.email && formik.errors.email ?
                    <Alert variant="danger">
                    {formik.errors.email}
                    </Alert>
                :null}
            </div>

            <div className="form-group mt-3 mb-3">
                <label htmlFor='phone'>Mob No</label>
                <input
                    id='phone'
                    name='phone'
                    className="form-control"
                    type='phone'
                    placeholder="Mobile Number"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    value={formik.values.phone}
                />
                {formik.touched.phone && formik.errors.phone ?
                    <Alert variant="danger">
                    {formik.errors.phone}
                    </Alert>
                :null}
            </div>

            <div className="form-group mt-3 mb-3">
                <label htmlFor="message">Message</label>
                    
                <textarea
                    className="form-control"
                    name="message"
                    rows="3"
                    placeholder='Enter Your Message'
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur} 
                    value={formik.values.message}
                ></textarea>
                { formik.errors.message && formik.touched.message ?
                    <Alert variant="danger">
                        {formik.errors.message}
                    </Alert>
                :null}
            </div>
            <button className="btn btn-primary" type='submit'>Submit</button>
           </form>
        </>
    )
}
    

export default Contact;