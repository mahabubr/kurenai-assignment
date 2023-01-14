import React from 'react';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const PostBlog = () => {

    const navigate = useNavigate()

    const handleBlog = (e) => {
        e.preventDefault()

        const form = e.target

        const title = form.title.value
        const description = form.description.value

        const data = {
            title,
            description
        }

        fetch('https://kurenai-assighment-server.vercel.app/blog', {
            method: "POST",
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    toast.success("Blog Added")
                    navigate('/publish-blog')
                    form.reset()
                }
            })

    }

    return (
        <div className='w-10/12 md:w-8/12 lg:w-6/12 mx-auto my-20'>
            <h1 className='uppercase text-center font-bold text-3xl text-violet-500 mb-4'>Post Your Blog</h1>
            <form onSubmit={handleBlog} className='mt-8 w-10/12 mx-auto space-y-5'>
                <input type="text" name='title' placeholder='Blog Title' required className='w-full border-2 p-2 rounded border-gray-700' />
                <textarea name="description" required className='w-full border-2 p-2 rounded border-gray-700' placeholder='Blog Description' id="" cols="30" rows="10"></textarea>
                <input type="submit" value="Submit Your Blog" className='bg-pink-600 px-4 py-3 hover:bg-pink-700 duration-300 text-white rounded-md w-full cursor-pointer' />
            </form>
        </div>
    );
};

export default PostBlog;