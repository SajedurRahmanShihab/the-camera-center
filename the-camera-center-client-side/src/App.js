import './App.css';
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Navigation from './Pages/Shared/Navigation/Navigation';
import Home from './Pages/Home/Home/Home';
import Blogs from './Pages/Blogs/Blogs';
import Login from './Pages/Login/Login';
import Register from './Pages/Register/Register';
import Reviews from './Pages/Reviews/Reviews';
import AuthProvider from './context/AuthProvider/AuthProvider';
import Products from './Pages/Products/Products';
import Orders from './Pages/Orders/Orders';
import PrivatePage from './Pages/PrivatePage/PrivatePage';

function App() {
  return (
    <BrowserRouter>

      <AuthProvider>
        <Navigation></Navigation>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/orders" element={<PrivatePage><Orders /></PrivatePage>} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/reviews" element={<Reviews />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}

export default App;
