import React from "react"
import { FormNode } from "../lib/interfaces/Form"

/* eslint-disable @next/next/no-img-element */
const CardImgWrapper: React.FC<{ formData: FormNode }> = (props) => {
  const { cardName, cardNumber, cvc, mm, yy } = props.formData

  const formatCCNumber = (val: string) => {
    let final_cc_str
    const results = val.match(/\d{4}/g)
    if (results) {
      return (final_cc_str = results.join(" "))
    }

    return val
  }

  return (
    <div className="card-img-wrapper">
      <div className="back">
        <p className="card-img-cvc">{cvc ? cvc : "000"}</p>
        <img src="./images/bg-card-back.png" className="" alt="bg-card-back" />
      </div>

      <div className="front">
        <div className="circle">
          <div className="large-circle"></div>
          <div className="small-circle"></div>
        </div>
        <p className="card-img-number">
          {cardNumber ? formatCCNumber(cardNumber) : "0000 0000 0000 0000"}
        </p>
        <p className="card-img-name">{cardName ? cardName : "Jane Applesseed"}</p>
        <p className="card-img-exp">
          {mm ? mm : "00"}/{yy ? yy : "00"}
        </p>
        <img src="./images/bg-card-front.png" className="" alt="card-front" />
      </div>
    </div>
  )
}

export default CardImgWrapper
