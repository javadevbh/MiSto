//Components
import Header from "./components/shared/Header";
import Footer from "./components/shared/Footer";
import Main from "./components/MainPage";
import ProductDetails from "./components/ProductDetails";
import MenPage from "./components/MenPage";
import WomenPage from "./components/WomenPage";
import Blogs from "./components/Blogs";

//React Router Dom
import { Routes, Route, Navigate } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/menpage" element={<MenPage/>}/>
        <Route path="/womenpage" element={<WomenPage/>}/>
        <Route path="/:id" element={<ProductDetails/>}/>
        <Route path="/blogs" element={<Blogs/>}/>
        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
