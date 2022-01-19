import './JoinUs.css';

function JoinUs ()  {
    return (
        <div className="team_back last" id="join">
            <div className="packages_title team_below">
                <h3 className="split_title">Join Us</h3>
                <hr/>
                <div className="join_content">
                <p>Join us today by providing your email address</p>
                <form className="form-center" action="" method="POST">
                    <input type="text" placeholder="Email" name="Name" required/>
                    <button type="submit" className="btn-join-3">Submit</button>
                </form>
                <h4>Created by <i>Joao Corticadas</i></h4>
                </div>
            </div>
        </div>
    )
}

export default JoinUs