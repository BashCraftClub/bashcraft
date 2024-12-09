import Footer from "./_components/footer";
import Navbar from "./_components/navbar";

const Homelayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Homelayout;
