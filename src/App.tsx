import { lazy, Suspense } from "react";

// importing some other component from lib
import { NoLibComponent } from "react-lib";

const SelectLazy = lazy(() => import("./SelectComponent"));

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NoLibComponent />
        <Suspense fallback="loading">
          <SelectLazy />
        </Suspense>
      </header>
    </div>
  );
}

export default App;
