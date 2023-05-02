import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { CartPage } from './page/Cart/CartPage/CartPage';
import { FavoritePage } from './page/Cart/FavoritePage/FavoritePage';
// import Header from './component/Header/Header';
import Root from './Root';
import Home from './page/Home/Home';
import { Provider } from 'react-redux';
import { store } from './redux/store/store';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root/>,
    errorElement: <div>Not Found</div>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "favorite",
        element: <FavoritePage />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <RouterProvider router={router} />
  </Provider>
);


