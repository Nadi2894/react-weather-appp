import "./App.css";
import Weather from "./Weather";

export default function App() {
  return (
    <div className="App">
      <div className="App container">
        <Weather defaultCity="New York" />
        <footer>
          This page was made by Nadira-Begim and is {""}
          <a href="https://github.com/Nadi2894/react-weather-appp">
            open-sourced on GitHub{" "}
          </a>
        </footer>
      </div>
    </div>
  );
}
