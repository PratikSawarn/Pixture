import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './components/Home';
import Movie from './components/routes/Movie';
import Tv from './components/routes/Tv';
import People from './components/routes/People';
import MovieDetail from './components/routes/MovieDetail';
import Video from './helpers/Video';


const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:"",
        element:<Home/>
      },
      {
        path:"movie/:type",
        element:<Movie/>
      },
      {
        path:"tv/:type",
        element:<Tv/>
      },
      {
        path:"people/:popular",
        element:<People/>
      },
      {
        path:"details/:media_type/:id",
        element:<MovieDetail/>
      },
      {
        path:"play/:id",
        element:<Video/>
      }
    ]
  }
])


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
