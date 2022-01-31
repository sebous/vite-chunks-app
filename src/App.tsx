import { lazy, Suspense } from "react";
import "./App.css";
// const SelectLazy = lazy(() => import("./SelectComponent"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <Suspense fallback="loading">
          <SelectLazy />
        </Suspense> */}
      </header>
    </div>
  );
}

export default App;
