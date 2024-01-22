import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import HomeRootLayout from './page/HomeRootLayout';
import HomePage from './page/HomePage';
import AuthPage from './page/AuthPage';
import SignUpForm from './container/SignUpForm';
import LoginForm from './container/LoginForm';
import AboutPage from './page/AboutPage';
import PersistLogin from './utils/PersistLogin';
const ProfilePage = lazy(() => import("./page/ProfilePage"));
import { loader as checkAuthLoader } from './utils/loaders';
import ErrorBoundary from './components/ErrorBoundary';
import PasswordReset from './page/PasswordReset';
import PropertiesPage from './page/PropertiesPage';
import PropertyPage from './page/PropertyPage';


// **************************************

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',

      element: <HomeRootLayout />,
      children: [
        {
          path: "/",
          element: <PersistLogin />,
          children: [
            {
              path: '',
              element: <HomePage />
            },
            {
              path: '/properties',
              element: <PropertiesPage />
            },
            {
              path: '/properties/:propertyId',
              element: <PropertyPage />
            },
            {
              path: 'about',
              element: <AboutPage />,
              loader: checkAuthLoader,
            },
            {
              path: 'profile/:id',
              element: <ProfilePage />,
              loader: checkAuthLoader,
            }
          ]
        },
        {
          path: "auth",
          element: <AuthPage />,
          children: [
            {
              path: "signup",
              element: <SignUpForm />
            },
            {
              path: "login",
              element: <LoginForm />
            },
          ]
        },

        // {
        //   path: 'about',
        //   element: <PersistLogin />,
        //   children: [
        //     {
        //       path: '',
        //       element: <AboutPage />,
        //       loader: checkAuthLoader,
        //     }
        //   ]
        // },
        // {
        //   path: 'profile/:id',
        //   element: <PersistLogin />,


        //   children: [
        //     {
        //       path: '',
        //       element: <ProfilePage />,
        //       loader: checkAuthLoader,
        //     }
        //   ]
        // }
      ],


    },
    {
      path: "reset-password/:resetToken",
      element: <PasswordReset />,
    },
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App