import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/home";

function App() {
  return (
    <div translate="off" lang="en">
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
