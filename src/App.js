import Navbar from "./components/Navbar.js";
import Section1 from "./components/Section1.js";
import Section2 from "./components/Section2.js";
import Section3 from "./components/Section3.js";
import Section4 from "./components/Section4.js";
import Section5 from "./components/Section5.js";
import GlobalStyle from "./components/globalStyle.js";

function App() {
  return (
    <div className="app">
      <GlobalStyle />
      <Navbar />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
}

export default App;
