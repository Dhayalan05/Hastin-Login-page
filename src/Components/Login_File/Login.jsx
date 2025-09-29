import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import AccessCodeModal from './AccessCode';
import { Link, useNavigate } from 'react-router';
import "./Login.css";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loader from '../Loader_File/Loader';
import { postloginRequest } from '../../Redux/Action_File/Action';


const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading, error, loginData, accessCodeStatus } = useSelector(
    state => state.user || {}
  );
  const [userName, setUserName] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (loginData) {
      toast.success("Login successful!", {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "colored",
      });
      setIsModalOpen(true);
    }
  }, [loginData]);

  useEffect(() => {
    if (accessCodeStatus?.data?.isValidAccessCode) {
      setIsModalOpen(false);
      navigate('/vendor');
    }
  }, [accessCodeStatus, navigate]);

  useEffect(() => {
    if (error) {
      toast.error(error, {
        position: "top-right",
        autoClose: 3000,
        pauseOnHover: true,
        theme: "colored",
      });
    }
  }, [error]);


  const handleSubmit = (e) => {
    e.preventDefault();
    let formErrors = {};

    if (!userName.trim()) {
      formErrors.userName = " required";
      toast.error("Username is required!");
    }
    if (!password.trim()) {
      formErrors.password = " required";
      // toast.error("Password is required!");
    }

    setErrors(formErrors);

    if (Object.keys(formErrors).length > 0) return;

    dispatch(postloginRequest({ userName, password }));
  };

  const handleUsernameChange = (e) => {
    setUserName(e.target.value);
    if (errors.userName) {
      setErrors((prev) => ({ ...prev, userName: "" }));
    }
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
    if (errors.password) {
      setErrors((prev) => ({ ...prev, password: "" }));
    }
  };

  return (
    <div className="body-text">
      <div className="extra-login-wrapper">
        <div className="extra-container glass">
          <div className="extra-right">
            <div className="right-header">
              <h3 style={{ color: "black" }}>LOGIN</h3>
            </div>
            <form onSubmit={handleSubmit}>
              <input
                type="text"
                placeholder="Username"
                value={userName}
                onChange={handleUsernameChange}
                autoComplete="username"
                style={{ width: "100%" }}
              />
              {errors.userName && (
                <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                  {errors.userName}
                </p>
              )}

              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                value={password}
                onChange={handlePasswordChange}
                autoComplete="current-password"
                style={{ width: "100%" }}
              />
              {errors.password && (
                <p style={{ color: "red", fontSize: "14px", marginTop: "4px" }}>
                  {errors.password}
                </p>
              )}

              <label className="show-password-label">
                <input
                  type="checkbox"
                  checked={showPassword}
                  onChange={() => setShowPassword(!showPassword)}
                /> Show Password
              </label><br></br>

              <a href="/" className="forgot-link" title='forget password?'><b>Forgot password?</b> </a>
              <button
                type="submit"
                className="extra-login-btn"
                disabled={loading}
              >
                {loading ? "Logging in..." : "Login"}
              </button>
            </form>
          </div>
        </div>

        {loading && <Loader />}

        <AccessCodeModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
        />
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
