import React from "react";
import { useNavigate } from "react-router-dom";

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div style={{ fontFamily: 'Inter, sans-serif', backgroundColor: '#fff9f2', color: '#333', padding: '2rem' }}>
      <header style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div style={{ fontSize: '1.5rem', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
          <img src="https://img.icons8.com/ios-filled/50/panda.png" width="24" alt="Logo" />
          ThriftEase
        </div>
        <nav>
          {/* These could be enhanced later for actual routes like /search, /saved, etc. */}
          <a href="#" style={{ margin: '0 1rem', textDecoration: 'none', color: '#333' }}>Search</a>
          <a href="#" style={{ margin: '0 1rem', textDecoration: 'none', color: '#333' }}>Saved</a>
          <a href="#" style={{ margin: '0 1rem', textDecoration: 'none', color: '#333' }}>Shop</a>
          <a href="#" style={{ margin: '0 1rem', textDecoration: 'none', color: '#333' }}>Cart</a>
          <button
            onClick={() => navigate('/login')}
            style={{ padding: '0.5rem 1rem', border: '1px solid #ccc', borderRadius: '10px', background: 'white', cursor: 'pointer' }}
          >
            Sign in
          </button>
        </nav>
      </header>

      <section style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginTop: '3rem' }}>
        <div style={{ maxWidth: '50%' }}>
          <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
            <button
              onClick={() => navigate('/dashboard')}
              style={{ backgroundColor: '#f47c53', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', border: 'none', fontSize: '1rem', cursor: 'pointer' }}
            >
              Explore
            </button>
          </div>
          <h1 style={{ fontSize: '3rem', fontWeight: 700, marginBottom: '1rem' }}>Thrift Store</h1>
          <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>Find unique, second-hand treasures for less</p>
          <button
            onClick={() => navigate('/dashboard')}
            style={{ backgroundColor: '#f47c53', color: 'white', padding: '0.75rem 1.5rem', borderRadius: '12px', border: 'none', fontSize: '1rem', cursor: 'pointer' }}
          >
            Shop Now
          </button>
          <div style={{ display: 'flex', gap: '1rem', marginTop: '2rem' }}>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '9999px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', gap: '0.5rem' }}>
              <span>⚪</span> Sustainable
            </div>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '9999px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', gap: '0.5rem' }}>
              <span>🕚</span> Affordable
            </div>
            <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'white', padding: '0.5rem 1rem', borderRadius: '9999px', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', gap: '0.5rem' }}>
              <span>🛒</span> Curated
            </div>
          </div>
        </div>
        <div>
          <img src="https://cdn-icons-png.flaticon.com/512/2921/2921823.png" alt="Thrift items" style={{ maxWidth: '500px' }} />
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
