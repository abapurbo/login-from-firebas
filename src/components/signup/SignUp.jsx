import { createUserWithEmailAndPassword } from 'firebase/auth';
import React, { useState } from 'react';
import auth from '../../firebase init/firebase';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
const SignUp = () => {
    const [errorMassage, setErrorMassage] = useState(' ')
    const [errorPassword, setPassword] = useState(' ')
    const [success, setSuccess] = useState(null)
    const [showPass, setShowPass] = useState(false)
    const [checkbox,setCheckbox]=useState(' ')
    const handleSignUp = (e) => {
        // rest your error
        setErrorMassage('')
        // reset password error
        setCheckbox(' ')
        setPassword('')
        // this text write then don't reload

        e.preventDefault()
        const email = e.target.email.value;
        const password = e.target.password.value;
        const terms=e.target.terms.checked
        console.log(email,password,terms)
        const passwordRegularExp = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
         if(!terms){
           setCheckbox('Please accept our terms condition');
            return;
         }
        if (!passwordRegularExp.test(password)) {
            setPassword('write now low,upper,number and spacial character !')
            return;
        }
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                console.log(result.user)
                setSuccess(true)
            })
            .catch(error => {
                setErrorMassage(error.message)
                setSuccess(false)

            })
    }
    console.log(errorMassage)
    return (
        <div className="hero bg-base-200 min-h-screen">

            <div className="card bg-base-100 w-full  max-w-sm shrink-0 shadow-emerald-950 shadow-lg">
                <h1 className="text-5xl font-bold text-center my-10">Login now!</h1>
                <div>
                    {
                        checkbox&&<p>{checkbox}</p>
                    }
                </div>
                <div className="card-body">
                    <form onSubmit={handleSignUp} className="fieldset ">
                        <label className="fieldset-label">Email</label>

                        <input type="email" required className="input" name='email' placeholder="Email" />
                        {
                            errorMassage && <p className=' mx-1 text-red-700'>{errorMassage}</p>
                        }<div className='relative space-y-2'>
                            <label className="fieldset-label">Password</label>
                            <input type={showPass ? 'text' : 'password'} required className="input" name='password' placeholder="Password" />
                            <button onClick={() => setShowPass(!showPass)} className=' absolute right-9 top-9'>
                                {
                                    showPass ? <FaEyeSlash className='text-xl' /> : <FaEye className='text-xl' />
                                }

                            </button>
                        </div>

                        {
                            errorPassword && <p className='text-red-800'>{errorPassword}</p>
                        }
                        <div><a className="link link-hover">Forgot password?</a></div>
                        <div className='space-x-2 my-2 flex  items-center'>
                            <input type="checkbox" name='terms' className="checkbox checkbox-success" />
                            <span className='text-[16px]'>Accept our terms and condition</span>
                        </div>
                        <button className="btn btn-accent mt-4">Login</button>

                    </form>

                </div>
                {
                    success && <p className='text-green-700'>Successfully in the sign up</p>
                }

            </div>

        </div>
    );
};

export default SignUp;