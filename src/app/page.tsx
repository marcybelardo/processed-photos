import Header from "./components/header";
import Footer from "./components/footer";
import ImagePanel from "./components/image_panel";
import ImageText from "./components/image_text";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="page-body">
        <ImageText />
        <ImagePanel path="/images/sample.jpeg" />
        <div><p>placeholder</p></div>
      </div>
      <Footer />
    </main>
  )
}
