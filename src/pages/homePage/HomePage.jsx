import PageTitle from "../../components/pageTitle/PageTitle"
import css from "./HomePage.module.css"

export default function HomePage() {
  return (
    <div className={css.container}>
          <PageTitle>Welcome to Phonebook! </PageTitle>
        </div>
  );
}