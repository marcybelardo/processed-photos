export default function ImageText() {
    const title = "A Sample Title";
    const text = "This is a sample of what the text on the page will look like."

    return(
        <div className="image-text">
            <h3>{title}</h3>
            <p>{text}</p>
        </div>
    )
}