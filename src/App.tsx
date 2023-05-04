import { Route, Routes } from "react-router-dom";
import Layout from "./Views/Layout";
import HomePage from "./Views/HomePage";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />{" "}
      </Route>
    </Routes>
  );
};

export default App;
