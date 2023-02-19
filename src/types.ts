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

export type Props = {
    text: string
    options?: QrOptions
}
