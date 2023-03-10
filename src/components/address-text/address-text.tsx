import React from "react"
import { CopyToClipboard, validateAddress } from ".."
import { BoxProps, HStack, Text } from "@chakra-ui/react"
import { makeShortId } from "../../helpers"

export function AddressText({
  addressText,
  isFullText = false,
  children,
  textProps,
  iconProps,
  ...props
}: React.PropsWithChildren<
  {
    addressText: string
    isFullText?: boolean
    textProps?: Record<string, any>
    iconProps?: Record<string, any>
  } & BoxProps
>) {
  const containerRef = React.useRef<HTMLDivElement>(null)
  const copyToClipboardRef = React.useRef<HTMLDivElement>(null)
  const [displayedAddressText, setDisplayedAddressText] = React.useState(
    () => addressText,
  )

  React.useEffect(() => {
    if (containerRef?.current && copyToClipboardRef?.current && addressText) {
      const offsetW = containerRef?.current?.offsetWidth as number
      const scrollW = containerRef?.current?.scrollWidth as number
      if (scrollW > offsetW) {
        const copyW = copyToClipboardRef?.current?.offsetWidth as number
        const shortened = shortenAddressText(
          offsetW - copyW,
          scrollW,
          addressText,
        )
        setDisplayedAddressText(shortened)
      }
    }
  }, [addressText, containerRef, copyToClipboardRef])

  return (
    <HStack
      bgColor="gray.100"
      rounded="md"
      px={2}
      py={1}
      fontSize="md"
      ref={containerRef}
      {...props}
    >
      <Text
        fontFamily="monospace"
        aria-label="public address"
        title={addressText}
        onCopy={e => {
          e.clipboardData.setData("text/plain", addressText)
          e.preventDefault()
        }}
        {...textProps}
      >
        {children
          ? children
          : isFullText
          ? displayedAddressText
          : makeShortId(addressText)}
      </Text>
      <CopyToClipboard
        toCopy={addressText}
        iconProps={iconProps}
        containerProps={{ ref: copyToClipboardRef }}
      />
    </HStack>
  )
}

const ELLIPSIS_SIZE = 2
export function shortenAddressText(
  offsetWidth: number,
  scrollWidth: number,
  addressText: string,
): string {
  const isValid = validateAddress(addressText)
  if (isValid !== true) throw new Error(isValid)
  if (offsetWidth >= scrollWidth) return addressText
  const addressLen = addressText.length
  const halfLen = Math.round(addressLen / 2)
  const avgCharSize = Math.round(scrollWidth / addressLen)
  const charsToRemove =
    Math.round((scrollWidth - offsetWidth) / Math.round(avgCharSize)) +
    ELLIPSIS_SIZE
  const first = addressText.slice(0, halfLen - charsToRemove / 2)
  const second = addressText.slice(halfLen + charsToRemove / 2)
  return first + "..." + second
}
