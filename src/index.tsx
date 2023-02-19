import { Component, createSignal } from "solid-js"
import Qr from "qrcode"
import type { Props as QRProps } from "./types"
import { defaultOptions } from "./defaultOptions"

export const SolidQR: Component<QRProps> = (props: QRProps) => {
    const { text, options = defaultOptions } = props

    const [qr, setQr] = createSignal<string | undefined>(undefined)
    const generateQr = (text: string) => {
        const canvas = document.getElementById("qr_container")
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
    return <img src={qr()} />
}

export default SolidQR
