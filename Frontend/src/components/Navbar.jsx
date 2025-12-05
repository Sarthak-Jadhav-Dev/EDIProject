import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { jwtDecode } from "https://esm.sh/jwt-decode@4.0.0";

const Navbar = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [user, setUser] = useState(null);

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      try { setUser(jwtDecode(token)); } catch { setUser(null); }
    } else {
      setUser(null);
    }
  }, [location]);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setUser(null);
    navigate("/login");
  };

  const navStyle = {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "16px 48px",
    backgroundColor: "rgba(0, 0, 0, 0.3)",
    backdropFilter: "blur(10px)",
    WebkitBackdropFilter: "blur(10px)",
    position: "fixed",
    top: 0,
    left: 0,
    width: "100%",
    boxSizing: 'border-box',
    zIndex: 1000,
    borderBottom: "1px solid rgba(255, 255, 255, 0.1)"
  };

  const logoStyle = {
    fontSize: "1.5em",
    fontWeight: "bold",
    color: "#7f53ac",
    textDecoration: 'none'
  };

  const linkStyle = {
    color: "#a0a0a0",
    fontWeight: "500",
    fontSize: "0.9em",
    padding: "8px 16px",
    textDecoration: "none",
    transition: "color 0.3s ease"
  };

  const authContainerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px'
  };

  const loginButtonStyle = {
    color: '#a0a0a0',
    textDecoration: 'none',
    fontWeight: '500',
    fontSize: '0.9em',
    transition: "color 0.3s ease"
  };

  const signupButtonStyle = {
    background: 'linear-gradient(90deg, #7f53ac, #56b6c2)',
    color: '#fff',
    border: 'none',
    borderRadius: '8px',
    padding: '10px 18px',
    fontSize: '0.9em',
    fontWeight: 'bold',
    cursor: 'pointer',
    transition: "all 0.3s ease"
  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={logoStyle}><span style={{ color: "#56b6c2" }}>AI</span>Collab</Link>
      <div>
        <Link
          to="/"
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = '#56b6c2'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0a0'}
        >
          HOME
        </Link>
        <Link
          to="/create-join"
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = '#56b6c2'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0a0'}
        >
          WORKSPACE
        </Link>
        <Link
          to="/features"
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = '#56b6c2'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0a0'}
        >
          FEATURES
        </Link>
        <Link
          to="/about"
          style={linkStyle}
          onMouseEnter={(e) => e.currentTarget.style.color = '#56b6c2'}
          onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0a0'}
        >
          ABOUT
        </Link>
      </div>
      <div style={authContainerStyle}>
        {user ? (
          <>
            <span style={{ color: '#ccc' }}>Hello, {user.name || "User"}</span>
            <button
              style={signupButtonStyle}
              onClick={handleLogout}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(86, 182, 194, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              LOGOUT
            </button>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={loginButtonStyle}
              onMouseEnter={(e) => e.currentTarget.style.color = '#56b6c2'}
              onMouseLeave={(e) => e.currentTarget.style.color = '#a0a0a0'}
            >
              LOGIN
            </Link>
            <Link to="/signup">
              <button
                style={signupButtonStyle}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-2px)';
                  e.currentTarget.style.boxShadow = '0 4px 12px rgba(86, 182, 194, 0.4)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.boxShadow = 'none';
                }}
              >
                SIGN UP
              </button>
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
