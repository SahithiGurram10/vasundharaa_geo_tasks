import SearchList from "./components/SearchList";
import "./index.css";

function App() {
  return (
    <div className="page-wrapper">
      <div className="app-container">
        <h1 className="title">Live Search</h1>
        <p className="subtitle">Search names with instant highlighting</p>
        <SearchList />
      </div>
    </div>
  );
}

export default App;
