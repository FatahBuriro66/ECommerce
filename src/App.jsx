import "./App.css";
import Footer from "./Components/Footer/Footer";
import Navbar from "./Components/Navbars/Navbar";
import Cards from "./Components/Cards/Cards";
import { faker } from "@faker-js/faker";

function App() {
  let randomImage = faker.image.urlLoremFlickr({ category: "bird" });
  let randomName = faker.animal.bird();
  return (
    <>
      <Navbar />
      <Cards
        title={randomName}
        images={randomImage}
        old_price="9,999"
        newPrice="9999"
        dollar="$"
        alt="batman"
        exp_date="10-08-2022"
      />
      <h1>Abdul fatah</h1>
      <Footer />
    </>
  );
}

export default App;
