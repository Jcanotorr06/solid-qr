import type { Component } from "solid-js"
import { SolidQR } from "../src"

const App: Component = () => {
    return (
        <div>
            <SolidQR text="https://www.youtube.com/watch?v=R0gzXl6r3LA" />
        </div>
    )
}

export default App
