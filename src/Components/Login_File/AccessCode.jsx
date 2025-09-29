import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { accesscodeRequest, resendOtpRequest , clearAccessCodeData } from '../../Redux/Action_File/Action';
import './AccessCode.css';

const AccessCodeModal = ({ isOpen, onClose }) => {
  const dispatch = useDispatch();
  const { accessCodeStatus, loading, error } = useSelector(state => state.accessCode || {});
  const finalOpaque = localStorage.getItem('opaque') || '';
  const finalAccessCode = localStorage.getItem('accessCode') || '';

  const [countdown, setCountdown] = useState(90);
  const [showResend, setShowResend] = useState(false);


  useEffect(() => {
    if (isOpen) {
      setCountdown(90);
      setShowResend(false);
    }
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    if (countdown > 0) {
      const timer = setTimeout(() => setCountdown(prev => prev - 1), 1000);
      return () => clearTimeout(timer);
    
    } else {
      setShowResend(true);
    dispatch(clearAccessCodeData());

    }}, [countdown, isOpen, dispatch]);

  const handleSubmit = () => {
    if (finalOpaque && finalAccessCode) {
      dispatch(accesscodeRequest({ opaque: finalOpaque, accessCode: Number(finalAccessCode) }));
    }
  };

  const handleResend = () => {
  
    dispatch(resendOtpRequest());
    setCountdown(90);
    setShowResend(false);
  };

  if (!isOpen) return null;

  return (
    <>
    <div className="otp-backdrop">
  <div className="otp-card rounded shadow p-4">
    <button className="btn-close float-end" onClick={onClose}></button>
    
    <h4 className="text-center fw-bold mb-2">OTP Verification</h4>
    <p className="text-center text-muted mb-3">
      Enter the OTP sent to your registered number.
    </p>

    <div className="d-flex justify-content-center gap-2 mb-3">
      <input
        className="form-control text-center otp-input"
        value={finalOpaque}
        readOnly
      />
      <input
        className="form-control text-center otp-input"
        value={finalAccessCode}
        readOnly
      />
    </div>

    <div className="text-center text-muted mb-3 countdown">
      ⏳ {showResend ? '00:00' : `0${Math.floor(countdown / 60)}:${(countdown % 60).toString().padStart(2, '0')}`}
    </div>

    <button
      className={`btn btn-primary   btn w-100 ${showResend ? 'btn-resend' : 'btn-submit'}`}
      onClick={showResend ? handleResend : handleSubmit}
      disabled={loading}
    >
      {loading ? (
        <span className="spinner-border spinner-border-sm me-2 " />
      ) : showResend ? (
        'Resend OTP'
      ) : (
        'Submit'
      )}
    </button>

    {accessCodeStatus?.data?.message && (
      <div className="alert alert-success mt-3 text-center">
        {accessCodeStatus.data.message}
      </div>
    )}

    {error && (
      <div className="alert alert-danger mt-3 text-center">{error}</div>
    )}
  </div>
</div>

    </>
  );
};

export default AccessCodeModal;