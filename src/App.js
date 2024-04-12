import Head from "./components/Head";
import Foot from "./components/Foot";
import Shopbirds from "./components/Shopbird"; 
import Recapzzz from "./components/Recapzzz"; 
import Clownyara from "./components/Clownyar";
import ImageSlider from "./components/ImageSlider";
import Lastone from "./components/Lastone";


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
