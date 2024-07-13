
import { lazy, Suspense, useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Error from './components/error/Error'
import { selectIsRefreshing, selectIsError } from "./redux/auth/selectors";
import { refreshUser } from "./redux/auth/operations";
import PrivateRoute from "./components/privateRoute/PrivateRoute";
import RestrictedRoute from "./components/restrictedRoute/RestrictedRoute";
import { useDispatch, useSelector } from 'react-redux'
import './App.css'

const HomePage = lazy(() => import("./pages/homePage/HomePage"));
const RegisterPage = lazy(() =>
  import("./pages/registrationPage/RegistrationPage")
);
const LoginPage = lazy(() => import("./pages/loginPage/LoginPage"));
const ContactsPage = lazy(() =>
  import("./pages/contactsPage/ContactsPage")
);

export default function App() {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);
  const isError = useSelector(selectIsError);
  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isError ? (
    <Error />
  ) : isRefreshing ? (
    <p>Please wait, the page is refreshing </p>
  ) : (
    <Layout>
      <Suspense fallback={null}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={<RegisterPage />} redirectTo="/" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute
                component={<LoginPage />}
                redirectTo="/contacts"
              />
            }
          />
          <Route
            path="/contacts"
            element={
              <PrivateRoute component={<ContactsPage />} redirectTo="/login" />
            }
          />
        </Routes>
      </Suspense>
    </Layout>
  );
}