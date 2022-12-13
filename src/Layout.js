import { Outlet } from "react-router-dom";
// import PropTypes from "prop-types";
import Footer from "./components/Footer";
import Header from "./components/Header";

// function Layout({ user }) {
function Layout() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer /* user={user} */ />
    </>
  );
}

// Layout.propTypes = {
//   user: PropTypes.bool.isRequired,
// };

export default Layout;
