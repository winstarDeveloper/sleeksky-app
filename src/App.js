import { useState, useEffect, createContext } from "react";
import Logo from "./components/Logo/Logo";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Content from "./components/Content/Content";
import Footer from "./components/Footer/Footer";

import "./App.css";

export const DateContext = createContext();

function App() {
  const [time, setTime] = useState("");
  const [clicks, setClicks] = useState(0);
  const [clicktimes, setClicktimes] = useState([]);

  useEffect(() => {
    const timer = setInterval(() => {
      let today = new Date();
      setTime(
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
      );
    }, 1000);
    // clearing interval
    return () => clearInterval(timer);
  });

  const incrementClicks = () => {
    setClicks(clicks + 1);
    setClicktimes([...clicktimes, time]);
  };

  return (
    <div className="App">
      <DateContext.Provider value={{ time, clicks }}>
        <div id="left" className="column">
          <Logo />
          <Sidebar clickHandler={incrementClicks} />
        </div>
        <div id="right" className="column">
          <Header />
          <Content clicktimes={clicktimes} />
          <Footer />
        </div>
      </DateContext.Provider>
    </div>
  );
}

export default App;
