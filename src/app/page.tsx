import Header from "./components/header";
import Footer from "./components/footer";
import ImagePanel from "./components/image_panel";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="page-body">
        <ImagePanel path="/images/sample.jpeg" />
      </div>
      <Footer />
    </main>
  )
}
