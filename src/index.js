import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, RouterProvider, createBrowserRouter } from 'react-router-dom';
import Body from './components/Body';
import MealsInCategory from './components/MealsInCategory';
import RecipeDetails from './components/RecipeDetails';
import Categories from './components/Categories';
import FavoriteMeals from './components/FavoriteMeals';

// Chunking
// Lazy loading
// Code splitting
const LazyComponent = React.lazy(() => import('./components/SomeLazyComponent'));

const appRoutes =createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      { path: '/', element: <Body /> },
      { path: '/recipe-app-react-js', element: <Body /> },
      {path: 'categories', element: <Categories/>},
      { path: 'category/:category', element: <MealsInCategory /> },
      { path: 'recipe/:id', element: <RecipeDetails />},
      { path: 'lazy', element: <Suspense fallback={<h1>Loading</h1>}><LazyComponent /></Suspense> },
      {path: 'favorites', element: <FavoriteMeals/>}


    ]
  }
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
  <RouterProvider router={appRoutes}>
    <App />
  </RouterProvider>
  </React.StrictMode>
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
