import Header from "./components/header";
import Footer from "./components/footer";
import ImagePanel from "./components/image_panel";
import ImageText from "./components/image_text";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="page-body">
        <div></div>
        <ImagePanel path="/images/sample.jpeg" />
        <ImageText />
      </div>
      <Footer />
    </main>
  )
}
