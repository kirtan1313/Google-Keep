import generateUniqueId from 'generate-unique-id';
import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { signInAsync } from '../Service/Action/keepAction';



function SignInForm() {


    const [inputData, setInputData] = useState({
        id: '',
        fname: '',
        email: '',
        pass: ''
    })

    const dispatch = useDispatch();

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

        dispatch(signInAsync(obj))

        setInputData({
            id: '',
            fname: '',
            email: '',
            pass: ''
        })
    }


    return (
        <>
            <div className='sign-in-form'>
                <div class="form-box">
                    <form class="form"  onSubmit={handleSubmit}>
                        <span class="title">Sign up</span>
                        <span class="subtitle">Create a free account with your email.</span>
                        <div class="form-container">
                            <input type="text" class="input" placeholder="Full Name" name='fname' value={inputData.fname} onChange={handleCreate}/>
                            <input type="email" class="input" placeholder="Email" name='email' value={inputData.email} onChange={handleCreate}/>
                            <input type="password" class="input" placeholder="Password" name='pass' value={inputData.pass} onChange={handleCreate} />
                        </div>
                        <button><Link to={'/login'} className='text-black'>Sign up</Link></button>
                    </form>
                    <div class="form-section">
                        <p>Have an account?<Link to={"/login"}>Log In</Link></p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SignInForm;
