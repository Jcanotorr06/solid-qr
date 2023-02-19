import type { Component } from "solid-js"
import { QRCode } from "../src"

const App: Component = () => {
    return (
        <div>
            <QRCode text="https://www.youtube.com/watch?v=R0gzXl6r3LA" />
        </div>
    )
}

export default App
