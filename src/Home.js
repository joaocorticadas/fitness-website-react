import Header from "./components/Header"
import './Home.css';
import Banner from "./components/Banner";
import Packages from "./components/Packages";
import About from "./components/About";
import Team from "./components/Team";
import JoinUs from "./components/JoinUs";
import './Mobile.css';

function Home ()  {
    return (
        <div className="home_back">
            <Header/>
            <Banner/>
            <Packages/>
            <About/>
            <Team/>
            <JoinUs/>
        </div>
    )
}

export default Home
