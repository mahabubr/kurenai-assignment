import React, { useEffect, useState } from 'react';

const PublishBlog = () => {

    const [blog, setBlog] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        fetch('https://kurenai-assighment-server.vercel.app/blog')
            .then(res => res.json())
            .then(data => {
                setBlog(data)
                setLoading(false)
            })
    }, [])

    if (loading) {
        return <div className="w-16 h-screen flex justify-center border-4 border-dashed rounded-full animate-spin dark:border-violet-400"></div>
    }

    return (
        <div className='my-20'>
            <h1 className='uppercase text-center font-bold text-3xl text-violet-500 mb-4'>Publishing Blog</h1>
            <div className='w-10/12 mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 mt-8'>
                {
                    blog.map(article =>
                        <article key={article._id} className='border-2 border-gray-700 p-5 rounded-lg shadow-xl'>
                            <h1 className='text-2xl font-bold mb-2'>{article.title}</h1>
                            <p>{article.description}</p>
                        </article>
                    )
                }
            </div>
        </div>
    );
};

export default PublishBlog;