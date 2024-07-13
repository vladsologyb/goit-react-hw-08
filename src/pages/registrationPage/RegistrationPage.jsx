import PageTitle from "../../components/pageTitle/PageTitle";
import RegistrationForm from "../../components/registrationForm/RegistrationForm";
import css from "./RegistrationPage.module.css";

export default function RegisterPage() {
  return (
    <div className={css.container}>
      <div className={css.wrapper}>
        <PageTitle>Register your account</PageTitle>
      </div>
      <RegistrationForm />
    </div>
  );
}