// import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/layout/Header";
import Content from "./components/layout/Content";
import Home from "./components/content/Home";
import Dashboard from "./components/content/Dashboard";
import NomorSembilan from "./components/Soal/components/NomorSembilan";

function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" exact element={<Content />}>
          <Route path="/" exact element={<Home />} />
          <Route path="/dashboard" exact element={<Dashboard />} />
          <Route path="/no9" exact element={<NomorSembilan />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
