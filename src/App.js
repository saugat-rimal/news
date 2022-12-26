import { Search, Stories, Pagination } from "./components";
import { useGlobalContext } from "./components/context";

function App() {
  const value = useGlobalContext();

  return (
    <div className="App">
      <h1>hello {value}</h1>
      <Search />
      <Pagination />
      <Stories />
    </div>
  );
}

export default App;
