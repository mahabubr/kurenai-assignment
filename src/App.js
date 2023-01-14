import { Toaster } from 'react-hot-toast';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Main from './Layout/Main';
import Login from './Pages/Login/Login';
import PostBlog from './Pages/PostBlog/PostBlog';
import PublishBlog from './Pages/PublishBlog/PublishBlog';
import SignUp from './Pages/SignUp/SignUp';

function App() {

  const router = createBrowserRouter([
    {
      path: '/',
      element: <Main />,
      children: [
        {
          path: '/',
          element: <PostBlog />
        },
        {
          path: '/publish-blog',
          element: <PublishBlog />
        },
        {
          path: '/login',
          element: <Login />
        },
        {
          path: '/signup',
          element: <SignUp />
        }
      ]
    }
  ])

  return (
    <div>
      <RouterProvider router={router} />
      <Toaster />
    </div>
  );
}

export default App;
