import Big from "big.js"

// Big constructor will throw if argument is not a string or Big
Big.strict = true

const DEFAULT_MAX_DIGITS = 9

export const makeShortId = (idString: string): string => {
  return typeof idString === "string"
    ? `${idString.slice(0, 4)}...${idString.slice(-4)}`
    : ""
}

export const parseNumberToBigInt = (
  v: string,
  maxDigits: number = DEFAULT_MAX_DIGITS,
) => {
  const amount = Big(v)
  const precision = Big(`1e${maxDigits}`)
  return BigInt(amount.times(precision).toString())
}

export const amountFormatter = (
  amt: bigint,
  minDigits: number = 0,
  maxDigits: number = DEFAULT_MAX_DIGITS,
) => {
  const precision = Big(`1e${-maxDigits}`)
  const amount = Big(amt.toString()).times(precision)
  let amountNumber
  try {
    amountNumber = amount.toNumber()
    return new Intl.NumberFormat("en-US", {
      minimumFractionDigits: minDigits,
      maximumFractionDigits: maxDigits,
    }).format(amountNumber)
  } catch (e) {
    console.error("Error converting amount to number. Loss of precision detected", e)
    throw e
  }
}
