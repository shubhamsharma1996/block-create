import './App.css';
import SliderType from './Components/Slider/Sliders';
import Contact  from './Components/Contact/Contact';
import MainComp from './Components/MainComponent/MainComp'
import { Router, Route, Switch } from "react-router";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={MainComp}/>
        <Route path="/contact" component={Contact}/>
      </Switch>
      {/* <Contact /> */}
    </div>
  );
}

export default App;
