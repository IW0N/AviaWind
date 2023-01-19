import InteractiveButton from './InteractiveButton'
export default function InteractivePlane()
{
    return (
        <InteractiveButton
            maxSize={600}
            minSize={500}
            imageSrc="images/plane.png"
            speed={3.5}
            x="0%" y="21%"
            style={{ transform: "rotate(-5deg)" }}
        />)
}