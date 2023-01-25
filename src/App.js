import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import User from "./ar/User";
import UserEn from "./en/User";
import Next from "./ar/Next";
import NextEn from "./en/Next";
import Search from "./ar/Search";
import SearchEn from "./en/Search";
import Home from "./Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
 
          <Route index element={<Home />} />
          <Route path="ar/user" element={<User />} />
          <Route path="en/user" element={<UserEn />} />
          <Route path="ar/next" element={<Next />} />
          <Route path="en/next" element={<NextEn />} />
          <Route path="ar/search" element={<Search />} />
          <Route path="en/search" element={<SearchEn />} />
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
