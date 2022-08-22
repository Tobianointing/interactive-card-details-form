import React, { useState } from "react"
import { checkCreditCard } from "../lib/checkCreditCard"
import { FormNode } from "../lib/interfaces/Form"

export const useCustom = () => {
  const [formData, setFormData] = useState<FormNode>({
    cardName: "",
    cardNumber: "",
    cvc: "",
    mm: "",
    yy: "",
  })

  const [errors, setErrors] = useState<FormNode>({
    cardName: "",
    cardNumber: "",
    cvc: "",
    mm: "",
    yy: "",
  })

  const [success, setSuccess] = useState<boolean>(false)

  const handlChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }))
  }

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    let newErrors: FormNode = {
      cardName: "",
      cardNumber: "",
      cvc: "",
      mm: "",
      yy: "",
    }

    event.preventDefault()

    for (let [key, value] of Object.entries(formData)) {
      if (value === "") {
        newErrors = {
          ...newErrors,
          [key]: "Cant be blank",
        }
      }
    }

    if (formData.cvc) {
      if (formData.cvc.length < 3) {
        newErrors = {
          ...newErrors,
          cvc: "Length must be 3",
        }
      }
    }

    if (formData.cardNumber) {
      if (!checkCreditCard(formData["cardNumber"])) {
        newErrors = {
          ...newErrors,
          cardNumber: "Enter a valid card number",
        }
      }
    }

    if (formData.mm && formData.yy) {
      const now = new Date()

      let cardDate: Date

      if (Number(formData.mm) === 2) {
        cardDate = new Date(`${formData.mm}/28/20${formData.yy}`)
      } else {
        cardDate = new Date(`${formData.mm}/30/20${formData.yy}`)

        console.log(`${formData.mm}/30/20${formData.yy}`)
      }

      if (cardDate.getTime() < now.getTime()) {
        newErrors = {
          ...newErrors,
          mm: "Invalid Date",
          yy: "Invalid Date",
        }
      }
    }

    if (Object.values(newErrors).every((x) => x === "")) {
      setSuccess(true)
    } else {
      setErrors(newErrors)
    }
  }

  return { formData, errors, success, handlChange, handleSubmit }
}
