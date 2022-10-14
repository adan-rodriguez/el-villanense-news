import NewsList from "./pages/NewsList";
import News from "./pages/News";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<NewsList />} />
          <Route path=":section" element={<NewsList />} />
          <Route path=":section/:id" element={<News />} />
          <Route path="*" element={<div>Not Found</div>} />
        </Route>
      </Routes>
    </>
  );
};

export default App;
