import { JSX } from "solid-js/jsx-runtime"

/* Options to generate QR code */
export type QrOptions = {
    version?: number
    errorCorrectionLevel?: "low" | "medium" | "quartile" | "high"
    maskPattern?: number
    type?: "image/png" | "image/jpeg" | "image/webp"
    margin?: number
    scale?: number
    color?: {
        dark: string
        light: string
    }
    width?: number
}

type Base = JSX.IntrinsicElements["img"] & {
    text: string
    options?: QrOptions
}

export type Props = Omit<Base, "src" | "alt" | "height" | "width">
