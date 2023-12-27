import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Protected from "./components/Protected";
import Login from "./components/Login";
import Register from "./components/Register";
import { PrivateRoutes, PrivateAuthRoute } from "./components/PrivateRoutes";
import Page from "./components/Page";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route element={<PrivateRoutes />}>
            <Route path="/protected" element={<Protected />} />
          </Route>

          <Route element={<PrivateAuthRoute />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>

          <Route path="*" element={<Page />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
