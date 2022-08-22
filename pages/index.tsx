import type { NextPage } from "next"
import Head from "next/head"
import React from "react"
import Form from "../components/Form"
import CardImgWrapper from "../components/CardImgWrapper"
import Success from "../components/Success"
import {useCustom } from "../hooks/useCustom"


/* eslint-disable @next/next/no-img-element */
const Home: NextPage = () => {
 const {formData, errors, success, handlChange, handleSubmit} = useCustom()

  return (
    <div className="container">
      <Head>
        <title>Credit Card Details</title>
        <meta name="description" content="" />
      </Head>
      <CardImgWrapper formData={formData} />
      {success ? (
        <Success />
      ) : (
        <Form
          handleChange={handlChange}
          fromData={formData}
          handleSubmit={handleSubmit}
          errors={errors}
        />
      )}
    </div>
  )
}

export default Home
