import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import MainPage from './pages/MainPage';
import SubPage from './pages/SubPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <nav className="gnb">
        <Link to="/" className="gnb_link">메인</Link>
        <Link to="/sub">서브</Link>
      </nav>

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/sub" element={<SubPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;