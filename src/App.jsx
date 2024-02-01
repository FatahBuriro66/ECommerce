import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbars/Navbar";
import Cards from "./Components/Cards/Cards";

function App() {
  return (
    <>
      <Navbar />
      <Cards
        title="What is Lorem Ipsum?"
        images="../images/batman.png"
        old_price="9,999"
        newPrice="9999"
        dollar="$"
        alt="batman"
        exp_date="10-08-2022"
      />
      <h1>Abdul Fatah</h1>
      <Footer />
    </>
  );
}

export default App;
