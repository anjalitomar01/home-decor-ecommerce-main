import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { CartProvider } from './contexts/CartContext';
import { AuthProvider } from './contexts/AuthContext';
import HomePage from './pages/HomePage';
import ProductPage from './pages/ProductPage';
import CategoryPage from './pages/CategoryPage';
import CartPage from './pages/CartPage';
import CheckoutPage from './pages/CheckoutPage';
import LoginPage from './pages/auth/LoginPage';
import RegisterPage from './pages/auth/RegisterPage';
import AccountPage from './pages/AccountPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import NotFoundPage from './pages/NotFoundPage';
import Navbar from './components/common/Navbar';
import Footer from './components/common/Footer';
import Textiles from './components/home/categories/Textiles';
import Furniture from './components/home/categories/Furniture';
import Lightning from './components/home/categories/Lightning';
import Decor from './components/home/categories/Decor';
import TableLamp from './components/home/Lightning/TableLamp';
import Floorlamps from './components/home/Lightning/floorlamps'
import Studylamps from './components/home/Lightning/studylamps'
import Tripodlamps from './components/home/Lightning/tripodlamps'
import Lampshades from './components/home/Lightning/lampshades';
import Spotlights from './components/home/Lightning/spotlights'
const theme = createTheme({
  palette: {
    primary: {
      main: '#5E7A6B',
    },
    secondary: {
      main: '#D4A59A',
    },
    background: {
      default: '#F9F5F0',
    },
  },
  typography: {
    fontFamily: '"Playfair Display", serif',
    h1: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 700,
    },
    h2: {
      fontFamily: '"Playfair Display", serif',
      fontWeight: 600,
    },
    button: {
      fontFamily: '"Montserrat", sans-serif',
      fontWeight: 600,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <AuthProvider>
          <CartProvider>
            <Navbar />
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/products/:id" element={<ProductPage />} />
              <Route path="/category/:category" element={<CategoryPage />} />
              <Route path="/cart" element={<CartPage />} />
              <Route path="/checkout" element={<CheckoutPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/admin" element={<AdminDashboard />} />              
              <Route path="*" element={<NotFoundPage />} />
              <Route path="/Textile" element={<Textiles/>} />
              <Route path="/Furniture" element={<Furniture/>} />
              <Route path="/Lightning" element={<Lightning/>} />
              <Route path="/Decor" element={<Decor/>} />
              <Route path="/TableLamp" element={<TableLamp/>} /> 
              <Route path="/floorlamps" element={<Floorlamps/>} />
              <Route path="/Studylamps" element={<Studylamps/>} />
              <Route path="/tripodlamps" element={<Tripodlamps/>} />
              <Route path="/Lampshades" element={<Lampshades/>} />
              <Route path="/spotlights" element={<Spotlights/>} />
            </Routes>
            <Footer />
          </CartProvider>
        </AuthProvider>
      </Router>
    </ThemeProvider>
  );
}

export default App;
