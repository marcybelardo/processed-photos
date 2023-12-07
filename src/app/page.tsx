import ImagePanel from "./components/image_panel";
import ImageText from "./components/image_text";

export default function Home() {
  return (
    <div className="page-body__photo">
      <div></div>
      <ImagePanel path="/images/sample.jpeg" />
      <ImageText />
    </div>
  )
}
