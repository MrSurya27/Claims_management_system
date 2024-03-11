import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import backgroundImage from "../../Images/HomePage.jpg";
import "./home.css"

const Home = () => {
  // Get user data from Redux store
  const user = useSelector((state) => state.user.user.user);

  return (
    <div
      className="container-fluid p-0 d-flex flex-column justify-content-center align-items-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh"
      }}
    >
      <h1 className="display-20 algerian-style mb-4">
        Lumiq Claim's
      </h1>
      <div className="text-center">
        {user ? (
          <>
            {user.role === "policyHolder" && (
              <Link to="/your-policies" className="btn btn-lg btn-primary mb-2 me-2">
                Your Policies
              </Link>
            )}
            {["admin", "TPA"].includes(user.role) && (
              <Link to="/all-policies" className="btn btn-lg btn-primary mb-2">
                All Policies
              </Link>
            )}
          </>
        ) : (
          <div style={{ position: 'fixed', bottom: '60px', left: '0', width: '100%', textAlign: 'center' }}>
            <Link to="/login" className="btn btn-lg btn-primary mb-2">
              Login
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
