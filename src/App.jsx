import { useEffect } from 'react';
import { useParams, BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';

function Redirector() {
  const { id } = useParams(); // Extract ID from URL slug

  useEffect(() => {
    if (id) {
      const targetUrl = `https://ap.atomeducacional.com.br/cursogratuito-educacaofinanceira/?utm_source=indicacao&utm_medium=${id}&utm_campaign=edufinangrat`;
      window.location.href = targetUrl; // Redirect instantly
    }
  }, [id]);

  return <p>Redirecting...</p>;
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/:id" element={<Redirector />} />
        <Route path="/*" element={<Navigate to="/default" />} />
      </Routes>
    </Router>
  );
}

export default App;