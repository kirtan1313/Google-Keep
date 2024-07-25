import generateUniqueId from 'generate-unique-id';
import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebook, FaInstagram } from 'react-icons/fa';
import { GoogleAsync, logInAstnc } from '../Service/Action/keepAction';
// import { async } from '../../Service/fireBace-Action';

function LoginForm() {

    const { loading } = useSelector(state => state.keepReducer)

    const [inputData, setInputData] = useState({
        id: '',
        fname: '',
        email: '',
        pass: ''
    })

    console.log("hfdjh");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleCreate = (e) => {
        const { name, value } = e.target;
        setInputData({ ...inputData, [name]: value })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const obj = {
            ...inputData,
            id: generateUniqueId({ length: 1, useLetters: false })
        }

        console.log("Form", obj);

        dispatch(logInAstnc(obj))
        setInputData({
            id: '',
            fname: '',
            email: '',
            pass: ''
        })

    }

    const handleGoogle = () => {
        dispatch(GoogleAsync())
    }

    const handleHome = () => {
        navigate('/combine');
    }

    useEffect(() => {
        console.log("dkf");
        if (loading) {
            navigate('/combine')
        }
    }, [loading])





    return (
        <>
            <div className='sign-in-form'>
                <div class="form-box">
                    <form class="form" onSubmit={handleSubmit}>
                        <span class="title">Log In</span>
                        <span class="subtitle">Create a free account with your email.</span>
                        <div class="form-container">
                            <input type="text" class="input" placeholder="Full Name" name='fname' value={inputData.fname} onChange={handleCreate} />
                            <input type="email" class="input" placeholder="Email" name='email' value={inputData.email} onChange={handleCreate} />
                            <input type="password" class="input" placeholder="Password" name='pass' value={inputData.pass} onChange={handleCreate} />
                        </div>
                        <button onClick={handleHome}>Log In </button>
                    </form>
                    <div class="form-section">
                        <div className='text-center'>
                            <p className='mb-1'>Have an account?<Link to={"/"}>Sign In</Link></p>
                            <p>Connect With... Account</p>
                        </div>

                        <div className='d-flex justify-content-center gap-5'>
                            <h3 onClick={handleGoogle}><FcGoogle /></h3>
                            <h3><FaFacebook /></h3>
                            <h3><FaInstagram /></h3>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LoginForm
