import Home from "./pages/Home";
import { Routes, Route } from "react-router-dom";
import Page from "./pages/Page";
import { LOCAL_STORAGE_KEY_PAGES } from "./utils/constants";
import { FullScreen, useFullScreenHandle } from "react-full-screen";

function App() {
  const pageNumber = localStorage.getItem(LOCAL_STORAGE_KEY_PAGES) || 0;
  const handle = useFullScreenHandle();

  return (
    <FullScreen handle={handle}>
      <div className="App">
        <Routes>
          <Route path="/" element={<Home pageNumber={pageNumber} />} />
          <Route path="/page/:id" element={<Page fullscreen={handle} />} />
        </Routes>
      </div>
    </FullScreen>
  );
}

export default App;
