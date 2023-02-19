import { Component, createSignal } from "solid-js"
import Qr from "qrcode"
import type { Props } from "./types"
import { defaultOptions } from "./defaultOptions"

export const SolidQR: Component<Props> = (props: Props) => {
    const { text, options = defaultOptions, ...rest } = props

    const [qr, setQr] = createSignal<string | undefined>(undefined)
    const generateQr = (text: string) => {
        // @ts-ignore
        Qr.toDataURL(undefined, text, options, (error, url) => {
            if (error) {
                console.error(error)
                throw error
            } else {
                setQr(url)
            }
        })
    }

    generateQr(text)
    return <img src={qr()} {...rest} />
}

export default SolidQR
