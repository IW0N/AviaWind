import InteractiveButton from "./InteractiveButton"
export default function InteractiveWine() {
    return (
        <InteractiveButton
            minSize={250}
            maxSize={300}
            imageSrc="images/wine.png"
            speed={4}
            x="60%" y="40%"
            style={{ transform: "rotate(20deg)" }}
        />)
}