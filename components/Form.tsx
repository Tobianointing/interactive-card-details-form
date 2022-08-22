import React from "react"
import { FormNode } from "../lib/interfaces/Form"

interface Props {
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void
  fromData: FormNode
  handleSubmit: (event: React.FormEvent<HTMLFormElement>) => void
  errors: FormNode
}

const Form: React.FC<Props> = (props) => {
  const { cardName, cardNumber, cvc, mm, yy } = props.fromData

  const handleInputLimit = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.value.length > e.target.maxLength) {
      e.target.value = e.target.value.slice(0, e.target.maxLength)
    }

    if (e.target.name === "mm") {
      if (Number(e.target.value) > 12) {
        e.target.value = Math.floor(Number(e.target.value) / 10).toString()
      }
    }
  }

  return (
    <div className="form-wrapper">
      <form onSubmit={props.handleSubmit}>
        <div className="inputs-wrapper card-holder">
          <label htmlFor="cardholder-name">cardholder name</label>
          <input
            className={`card-holder ${props.errors.cardName && "error"}`}
            name="cardName"
            value={cardName}
            type="text"
            placeholder="e.g Jane Appleseed"
            onChange={props.handleChange}
          />
          <small className="error">{props.errors.cardName}</small>
        </div>
        <div className="inputs-wrapper card-number">
          <label htmlFor="card-number">card number</label>
          <input
            className={`card-holder ${props.errors.cardNumber && "error"}`}
            name="cardNumber"
            value={cardNumber}
            type="number"
            placeholder="e.g 1234 5678 9123 0000"
            onChange={props.handleChange}
            onInput={handleInputLimit}
            maxLength={16}
          />
          <small className="error">{props.errors.cardNumber}</small>
        </div>

        <div className="inputs-wrapper inline-inputs">
          <div className="exp-date-inputs">
            <label htmlFor="">EXP. DATE(MM/YY)</label>
            <input
              className={`card-holder ${props.errors.mm && "error"}`}
              type="number"
              name="mm"
              placeholder="MM"
              value={mm}
              onChange={props.handleChange}
              onInput={handleInputLimit}
              maxLength={2}
            />
            <input
              className={`card-holder ${props.errors.yy && "error"}`}
              type="number"
              name="yy"
              placeholder="YY"
              value={yy}
              onChange={props.handleChange}
              onInput={handleInputLimit}
              maxLength={2}
            />
            <small className="error">
              {props.errors.mm ? props.errors.mm : props.errors.yy ? props.errors.yy : ""}
            </small>
          </div>
          <div className="cvc">
            <label htmlFor="">CVC</label>
            <input
              className={`card-holder ${props.errors.cvc && "error"}`}
              type="number"
              name="cvc"
              placeholder="e.g 123"
              value={cvc}
              onChange={props.handleChange}
              onInput={handleInputLimit}
              maxLength={3}
            />
            <small className="error">{props.errors.cvc}</small>
          </div>
        </div>

        <button>Confirm</button>
      </form>
    </div>
  )
}

export default Form
