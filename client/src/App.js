import "./App.css";

import Nav from "./components/nav";
import HeaderBody from "./components/headerBody";
import OffersSection from "./components/offersSection";
import MainSection2 from "./components/Section2.main";
import CoursesList from "./components/coursesListSection";
import ReviewsSection from "./components/reviewsSection";
import AboutUs from "./components/aboutUs";
import Footer from "./components/footer";

function App() {
  return (
    <>
      <header className="bg-color1 text-white">
        <Nav />
        <HeaderBody />
      </header>

      <main>
        <OffersSection />
        <MainSection2 />
        <CoursesList />
        <ReviewsSection />
        <AboutUs />
      </main>

      <Footer />
    </>
  );
}

export default App;
