export function checkCreditCard(cardnumber: string) {
  // Define the cards we support. You may add addtional card types as follows.

  //  Name:         As in the selection box of the form - must be same as user's
  //  Length:       List of possible valid lengths of the card number for the card
  //  prefixes:     List of possible prefixes for the card
  //  checkdigit:   Boolean to say whether there is a check digit

  const card = { length: "16" }

  // Ensure that the user has provided a credit card number
  if (cardnumber.length == 0) {
    return false
  }

  // Now remove any spaces from the credit card number
  cardnumber = cardnumber.replace(/\s/g, "")

  // Check that the number is numeric
  let cardNo = cardnumber
  let cardexp = /^[0-9]{13,19}$/
  if (!cardexp.exec(cardNo)) {
    return false
  }

  // The following are the card-specific checks we undertake.
  let LengthValid = false
  let undefined

  // We use these for holding the valid lengths
  let lengths = new Array()

  // See if the length is valid for this card
  lengths = card.length.split(",")
  for (let j = 0; j < lengths.length; j++) {
    if (cardNo.length == lengths[j]) LengthValid = true
  }

  // See if all is OK by seeing if the length was valid. We only check the length if all else was
  // hunky dory.
  if (!LengthValid) {
    return false
  }

  // The credit card is in the required format.
  return true
}
