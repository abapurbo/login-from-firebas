
import { createUserWithEmailAndPassword } from 'firebase/auth';
import React from 'react';
import { Helmet } from 'react-helmet';
import auth from './../../firebase init/firebase';


const Regiester = () => {
    const handleSubmit=(e)=>{
        e.preventDefault()
        const email=e.target.email.value
        const password=e.target.password.value
         createUserWithEmailAndPassword(auth,email ,password)
         .then(userCredential=>{
            console.log(userCredential.user)
         })
         .catch(error=>console.log('error',error))
    }
    return (
        <div className='mt-10 flex justify-center'>
            <Helmet>
                <title>Firebase | Register</title>
            </Helmet>
            <form onSubmit={handleSubmit} className='flex flex-col space-y-2'>
                
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><rect width="20" height="16" x="2" y="4" rx="2"></rect><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path></g></svg>
                    <input type="email" placeholder="mail@site.com" name='email' />
                </label>
                <label className="input validator">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g strokeLinejoin="round" strokeLinecap="round" strokeWidth="2.5" fill="none" stroke="currentColor"><path d="M2.586 17.414A2 2 0 0 0 2 18.828V21a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h1a1 1 0 0 0 1-1v-1a1 1 0 0 1 1-1h.172a2 2 0 0 0 1.414-.586l.814-.814a6.5 6.5 0 1 0-4-4z"></path><circle cx="16.5" cy="7.5" r=".5" fill="currentColor"></circle></g></svg>
                    <input type="password" placeholder="Password" name='password'/>
                </label>
                <input type="submit" value="Submit" className="btn" />
            </form>
        </div>
    );
};

export default Regiester;