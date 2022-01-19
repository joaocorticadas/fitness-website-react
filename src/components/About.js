import './About.css';
import about1 from "../assets/about1.jpg"
import about2 from "../assets/about2.jpg"

function About ()  {
    return (
        <div>
            <div className="about_container ba_bot ba_one">
                <div className="about_container1">
                    <h1 className="split_title">Phisical exercise improves your strength</h1>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
                    <button><p className="explore_text"><i>Join Now ➜</i></p></button>
                </div>
                <div className="about_container2">
                    <img className="about_image" src={about1} alt="Italian Trulli"/>
                </div>
            </div>
            <div className="about_container ba_bot ba_two">
                <div className="about_container2">
                    <img className="about_image" src={about2} alt="Italian Trulli"/>
                </div>
                <div className="about_container1">
                    <h1 className="split_title about_title">Be more active and happier</h1>
                    <p className="about_title">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Rutrum tellus pellentesque eu tincidunt. Tincidunt tortor aliquam nulla facilisi cras. Facilisis mauris sit amet massa vitae tortor.</p>
                    <button className="about_btn"><p className="explore_text center_text"><i>Join Now ➜</i></p></button>
                </div>
            </div>
        </div>
    )
}

export default About