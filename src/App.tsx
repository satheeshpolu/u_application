import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import Demo from "./components/uApp/Demo";
import "./App.css";

const App = () => {
  const [count, setCount] = useState(0);

  return (
    <>
    <Demo></Demo>
      
    </>
  );
};

export default App;
