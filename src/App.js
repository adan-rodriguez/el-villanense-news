import Header from "./components/Header";
import NewsContainer from "./components/NewsContainer";
import { Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<NewsContainer />} />
        <Route path="/:section" element={<NewsContainer />} />
        <Route path="/:section/:id" element={<NewsContainer />} />
        <Route path="*" element={<NewsContainer />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
