import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import AddCoffee from './components/AddCoffee.jsx';
import UpdateCoffee from './components/UpdateCoffee.jsx';
import SignUp from './signUp/SignUp.jsx';
import SignIn from './signIn/SignIn.jsx';
import AuthProviders from './providers/AuthProviders.jsx';
import Users from './users/Users.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    loader: () => fetch('http://localhost:5000/coffee')
  },
  {
    path: 'addCoffee',
    element: <AddCoffee></AddCoffee>
  },
  {
    path: 'updateCoffee/:id',
    element: <UpdateCoffee></UpdateCoffee>,
    loader: ({ params }) => fetch(`http://localhost:5000/coffee/${params.id}`)
  },
  {
    path: '/signup',
    element: <SignUp></SignUp>
  },
  {
    path: '/signin',
    element: <SignIn></SignIn>
  }, 
  {
    path: '/users', 
    element: <Users></Users>, 
    loader: () => fetch('http://localhost:5000/user')
  }
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AuthProviders>
      <RouterProvider router={router} />
    </AuthProviders>
  </React.StrictMode>,
)
