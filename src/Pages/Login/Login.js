import React, { useContext } from 'react';
import { toast } from 'react-hot-toast';
import { BsGoogle } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../context/AuthProvider';

const Login = () => {

    const { googleSignIn, userSignIn } = useContext(AuthContext)
    const navigation = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const form = e.target
        const email = form.email.value
        const password = form.password.value

        userSignIn(email, password)
            .then(result => {
                toast.success("Sign in Successful")
                navigation('/')
            })
            .catch(e => toast.error(e.message))
    }


    const handleGoogle = () => {
        googleSignIn()
            .then(result => {
                toast.success("Sign In Successfully")
                navigation('/')
            })
            .catch(e => toast.error(e.message))
    }

    return (
        <div className='w-10/12 md:w-8/12 lg:w-6/12 h-screen mx-auto my-20'>
            <h1 className='uppercase text-center font-bold text-3xl text-violet-500'>Login</h1>
            <form onSubmit={handleSubmit} className='mt-8 w-10/12 mx-auto space-y-5'>
                <input type="email" name='email' placeholder='email' required className='w-full border-2 p-2 rounded border-gray-700' />
                <input type="password" name='password' placeholder='******' required className='w-full border-2 p-2 rounded border-gray-700' />
                <input type="submit" value="Login" className='bg-orange-600 px-4 py-3 hover:bg-orange-700 duration-300 text-white rounded-md w-full cursor-pointer' />
                <div onClick={handleGoogle} className='flex justify-center border p-2 cursor-pointer text-pink-700 items-center'>
                    <BsGoogle className='text-2xl' />
                    <p className='text-xl ml-2'>Google Login</p>
                </div>
            </form>
        </div>
    );
};

export default Login;