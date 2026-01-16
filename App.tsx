import React from 'react';
import { HashRouter, Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';
import { AuthProvider, useAuth } from './context/AuthContext';
import Home from './pages/Home';
import Catalog from './pages/Catalog';
import ProductDetail from './pages/ProductDetail';
import OrderTracking from './pages/OrderTracking';
import Login from './pages/Login';
import Register from './pages/Register';
import Cart from './pages/Cart';
import Checkout from './pages/Checkout';
import Contact from './pages/Contact';
import Novidades from './pages/Novidades';
import AdminDashboard from './pages/AdminDashboard';
import TermosDeUso from './pages/TermosDeUso';
import PoliticaDePrivacidade from './pages/PoliticaDePrivacidade';
import Orders from './pages/Orders';
import ComingSoon from './pages/ComingSoon';

// Layout wrapper to conditionally render Header/Footer
const Layout = ({ children }: { children?: React.ReactNode }) => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow flex flex-col">
        {children}
      </main>
      <Footer />
    </div>
  );
};

// Component to protect routes (Redirects unauthenticated users to Login)
const ProtectedRoute = ({ children }: { children: React.ReactNode }) => {
  const { isAuthenticated } = useAuth();
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }
  return <>{children}</>;
};

// Logout Component to handle state transition cleanly
const Logout = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  
  React.useEffect(() => {
    logout();
    navigate('/', { replace: true });
  }, [logout, navigate]);

  return null;
};

const App: React.FC = () => {
  return (
    <AuthProvider>
      <HashRouter>
        <Routes>
          {/* Public Routes without Layout (Standalone Pages) */}
          {/* ROTA PRINCIPAL É EM BREVE - MODO CONSTRUÇÃO */}
          <Route path="/" element={<ComingSoon />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/cadastro" element={<Register />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/sair" element={<Logout />} />
          
          {/* Routes with Layout (System Internal - Hidden from public nav) */}
          <Route path="*" element={
            <Layout>
              <Routes>
                {/* Home interna movida para /home */}
                <Route path="/home" element={<Home />} />
                
                <Route path="/contato" element={<Contact />} />
                <Route path="/termos" element={<TermosDeUso />} />
                <Route path="/privacidade" element={<PoliticaDePrivacidade />} />
                
                {/* Protected Routes (System/Catalog) */}
                <Route path="/catalogo" element={<ProtectedRoute><Catalog /></ProtectedRoute>} />
                <Route path="/produto/:id" element={<ProtectedRoute><ProductDetail /></ProtectedRoute>} />
                <Route path="/rastreio/:id" element={<ProtectedRoute><OrderTracking /></ProtectedRoute>} />
                <Route path="/pedidos" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
                <Route path="/carrinho" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
                <Route path="/checkout" element={<ProtectedRoute><Checkout /></ProtectedRoute>} />
                <Route path="/novidades" element={<ProtectedRoute><Novidades /></ProtectedRoute>} />
                
                {/* Fallback para a tela de Em Breve */}
                <Route path="*" element={<Navigate to="/" replace />} />
              </Routes>
            </Layout>
          } />
        </Routes>
      </HashRouter>
    </AuthProvider>
  );
};

export default App;