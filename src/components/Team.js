import './Team.css';
import team1 from "../assets/team1.jpg"
import team2 from "../assets/team2.jpg"
import team3 from "../assets/team3.jpg"

function Team ()  {
    return (
        <div className="team_back" id="team">
            <div className="packages_title team_below">
                <h3 className="split_title">Team</h3>
                <hr/>
            </div>
            <div className="team_container">
                <div className="team_item">
                    <img className="team_image" src={team1} alt="Italian Trulli"/>
                    <h3>John Smith</h3>
                    <p>Body Builder</p>
                </div>
                <div className="team_item">
                    <img className="team_image" src={team2} alt="Italian Trulli"/>
                    <h3>Andrew Max</h3>
                    <p>Cardio Instructor</p>
                </div>
                <div className="team_item">
                    <img className="team_image" src={team3} alt="Italian Trulli"/>
                    <h3>Oliver Times</h3>
                    <p>Boxing Instructor</p>
                </div>
            </div>
        </div>
    )
}

export default Team