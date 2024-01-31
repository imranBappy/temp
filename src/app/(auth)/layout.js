import Footer from "@/component/Footer/Footer";

const AuthLayout = ({ children }) => {
  return (
    <>
      {children}
      <Footer />
    </>
  );
};

export default AuthLayout;
