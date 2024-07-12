import { useSelector } from "react-redux"
import Navigation from "../navigation/Navigation"
import UserMenu from "../userMenu/UserMenu"
import AuthNav from "../authNav/AuthNav"
import { selectIsLoggedIn } from "../../redux/auth/selectors"
import css from "./AppBar.module.css"

export default function AppBar() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <header className={css.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
}