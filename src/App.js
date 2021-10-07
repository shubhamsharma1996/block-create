import './App.css';
import Header from './Components/Header/Header';
import Banner from './Components/Body/Banner';
import MainBody from './Components/Body/MainBody';
import GetIntouch from './Components/Body/GetIntouch';
import Plan from './Components/Plan/Plan';
import SliderType from './Components/Slider/Sliders';
import Contact  from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <MainBody />
      <GetIntouch />
      <Plan/>
      {/* <Contact /> */}
    </div>
  );
}

export default App;
