import Footer from "./Footer/Footer";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <>
      <div dir="rtl" className="content">
        <Navbar />
        {children}
      </div>
      <Footer />
    </>
  );
};

export default Layout;
