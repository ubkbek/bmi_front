import "./Home.css";
import {
  About,
  Contacts,
  Courses,
  Footer,
  Header,
  Hero,
  Questions,
  Results,
  Teachers,
  Slider,
  News,
} from "../../Components";

const Home = () => {
  return (
    <div>
      <div className='wrapper__bg'>
        <Header />
        <Hero />
      </div>

      <About />
      <Courses />
      <Results />
      <Teachers />

      <Slider />
      <News />
      <Questions />
      <Contacts />
      <Footer />
    </div>
  );
};

export default Home;
