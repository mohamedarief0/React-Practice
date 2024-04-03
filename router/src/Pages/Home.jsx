import React, { useState, useEffect } from "react";


function Home({ onResendOtp }) {

  const [seconds, setSeconds] = useState(90);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setSeconds(function (prevSeconds) {
        return prevSeconds > 0 ? prevSeconds - 1 : 0;
      });
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);

  useEffect(() => {
    if (seconds === 0) {
      onResendOtp();
    }
  }, [seconds, onResendOtp]);

  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = seconds % 60;

  return (
    <>
      <div>{`${minutes}:${
        remainingSeconds < 10 ? "0" : ""
      }${remainingSeconds}`}</div>
      <h2>Welcome to home page</h2>
      <p>This an online book Store</p>
      {/* <p>resend OTP in {timer}s</p> */}
    </>
  );
}

export default Home;
