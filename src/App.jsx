import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import SignUpForm from './container/SignUpForm';
import LoginForm from './container/LoginForm';
import PersistLogin from './utils/PersistLogin';
import { loader as checkAuthLoader } from './utils/loaders';
import PasswordReset from './page/PasswordReset';
import LoadingFallback from './components/ui/LoadingFallback';
import { wait } from './utils/utils';
import HomeLoading from './components/ui/HomeLoading';

const HomeRootLayout = lazy(() => wait(4000).then(() => import('./page/HomeRootLayout')));
const ProfilePage = lazy(() => import("./page/ProfilePage"));
const HomePage = lazy(() => import('./page/HomePage'));
const AuthPage = lazy(() => import('./page/AuthPage'));
const PropertiesPage = lazy(() => import('./page/PropertiesPage'));
const PropertyPage = lazy(() => import('./page/PropertyPage'));





// **************************************

const App = () => {

  const router = createBrowserRouter([
    {
      path: '/',

      element: <Suspense fallback={<HomeLoading  />}>
        <HomeRootLayout />
      </Suspense>,
      children: [
        {
          path: "/",
          element: <PersistLogin />,
          children: [
            {
              path: '',
              element: <Suspense fallback={<LoadingFallback />}>
                <HomePage />
              </Suspense>
            },
            {
              path: '/properties',
              element: <Suspense fallback={<LoadingFallback />}>
                <PropertiesPage />
              </Suspense>
            },
            {
              path: '/properties/:propertyId',
              element: <Suspense fallback={<LoadingFallback />}>
                <PropertyPage />
              </Suspense>
            },
            // {
            //   path: 'about',
            //   element: <Suspense fallback={<LoadingFallback/>}>
            //     <AboutPage />
            //   </Suspense>,
            //   loader: checkAuthLoader,
            // },
            {
              path: 'profile/:id',
              element: <Suspense fallback={<LoadingFallback />}>
                <ProfilePage />
              </Suspense>,
              loader: checkAuthLoader,
            }
          ]
        },
        {
          path: "auth",
          element: <Suspense fallback={<LoadingFallback />}>
            <AuthPage />
          </Suspense>,
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