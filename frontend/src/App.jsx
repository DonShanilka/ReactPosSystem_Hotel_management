import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import HomePage from './pages/HomePage';
import CustomerAddPage from './pages/CustomerAddPage';

const App = () => {
  return (
    <Router>
      <Sidebar />
      <main style={{ marginLeft: 240, padding: '1rem' }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/customers" element={<CustomerAddPage />} />
        </Routes>
      </main>
    </Router>
  );
};

export default App;
