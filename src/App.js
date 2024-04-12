import Head from "./components/Header/Head";
import Foot from "./components/Footer/Foot";
import Shopbirds from "./components/Shopbird/Shopbird"; 
import Recapzzz from "./components/Recapzzzz/Recapzzz"; 
import Clownyara from "./components/Clownyara/Clownyar";
import ImageSlider from "./components/Slider/ImageSlider";
import Lastone from "./components/Lastone/Lastone";
import News from "./Pages/News/News";
import Enot from "./Pages/Enot";
import KirillFlex from "./Pages/KirillFlex";
import DimaQueen from "./Pages/DimaQueen";


function App() {
  return (
    <div className="wrapper">
      <Head />
      <Shopbirds /> 
      <Recapzzz />
      <ImageSlider/>
      <Clownyara />
      <Lastone />
      <Foot />
      
    </div>

  );
}

export default App;
