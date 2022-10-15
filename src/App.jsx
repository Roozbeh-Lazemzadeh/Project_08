import AboutUs from "./components/AboutUs/AboutUs";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import HappyCouples from "./components/HappyCouples/HappyCouples";
import Header from "./components/header/Header";
import OurStory from "./components/OurStory/OurStory";

function App() {
	return (
		<>
			<Header />

			<AboutUs
				imgSrc="./src/assets/img/about-img.png"
				text="If you are going to use a passage of Lorem Ipsum, you need to be
						sure there isn't anything embarrassing hidden in the middle of text.
						All theIf you are going to use a passage of Lorem Ipsum, you need to
						be sure there isn't anything embarrassing hidden in the middle of
						text. All theIf you are going to use a passage of Lorem Ipsum, you
						need to be sure there isn't anything embarrassing hidden in the
						middle of text. All the"
			/>

			<HappyCouples />

			<OurStory />

			<Contact />

			<Footer />
		</>
	);
}

export default App;
