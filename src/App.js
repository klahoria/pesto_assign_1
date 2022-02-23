import logo from "./logo.svg";
import "./App.css";
import Header from "./components/header/Header";
import Main from "./components/Main";
import ErrorBoundary from "./errorBoundaries";
import { AuthGainer } from "./store/AuthGaurd/AuthContext";
import { BottomNavigation, BottomNavigationAction } from "@mui/material";

import RestoreIcon from "@mui/icons-material/Restore";
import FavoriteIcon from "@mui/icons-material/Favorite";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import Wrapper from "./components/Wrapper";

function App() {
  return (
    <>
      <ErrorBoundary>
        <Main />
      </ErrorBoundary>
    </>
  );
}

export default Wrapper(App);
