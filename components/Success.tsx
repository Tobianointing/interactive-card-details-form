import React from "react"

/* eslint-disable @next/next/no-img-element */
const Success: React.FC = () => {
  return (
    <div className="success">
      <div className="success-wrapper">
        <img src="./images/icon-complete.svg" alt="success-img" />
        <h1 className="text">thank you!</h1>
        <p>We&apos;ve added your card details</p>
        <button>Continue</button>
      </div>
    </div>
  )
}

export default Success
