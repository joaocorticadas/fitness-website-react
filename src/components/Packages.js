import './Packages.css';
import boxing from "../assets/boxing.jpg"
import running from "../assets/running.jpg"
import swimming from "../assets/swimming.jpg"
import muscle from "../assets/muscle.jpg"


function Packages ()  {
    return (
        <div className="packages_title" id="packages">
            <div>
                <h3 className="split_title">Packages</h3>
                <hr/>
            </div>
            <div className="slider_main">
                <div className="slider_item">
                    <img className="slider_image" src={boxing} alt="Italian Trulli"/>
                    <h3>Boxing</h3>
                    <button><p className="explore_text"><i>Learn More</i></p></button>
                </div>
                <div className="slider_item">
                    <img className="slider_image" src={running} alt="Italian Trulli"/>
                    <h3>Running</h3>
                    <button><p className="explore_text"><i>Learn More</i></p></button>
                </div>
                <div className="slider_item">
                    <img className="slider_image" src={swimming} alt="Italian Trulli"/>
                    <h3>Swimming</h3>
                    <button><p className="explore_text"><i>Learn More</i></p></button>
                </div>
                <div className="slider_item">
                    <img className="slider_image" src={muscle} alt="Italian Trulli"/>
                    <h3>Muscle</h3>
                    <button><p className="explore_text"><i>Learn More</i></p></button>
                </div>
            </div>
        </div>
    )
}
export default Packages