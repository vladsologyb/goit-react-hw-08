
import PageTitle from "../../components/pageTitle/PageTitle";
import css from "./LoginPage.module.css";
import LoginForm from '../../components/LoginForm/LoginForm';

export default function LoginPage() {
  return (
    <div className={css.container}>
      <PageTitle>Please log in</PageTitle>
      <LoginForm />
    </div>
  );
}