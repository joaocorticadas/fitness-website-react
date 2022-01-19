import './Banner.css';
import split from "../assets/split.jpg"


function Banner ()  {
    return (
        <div>
            <div className="banner_back" id="home">
                <div className="banner_t">
                    <div className="banner_l">
                        <h2>01</h2>
                    </div>
                    <div className="banner_r">
                        <div></div>
                    </div>
                </div>
                <div className="banner_m">
                    <h1>Get in shape!</h1>
                </div>
                <div className="banner_b">
                    <div className="banner_l">
                    </div>
                    <div className="banner_r">
                        <p className="banner_text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent.</p>
                        <p className="explore_text"><i>Learn more ➜</i></p>
                    </div>
                </div>
            </div>
            <div className="banner_split about_container" id="about">
                <div className="about_container1 ">
                    <img className="image_split" src={split} alt="Italian Trulli"/>
                </div>
                <div className="about_container2">
                    <div className="split_box">
                        <h1 className="split_title">About us</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.Praesent nec consectetur id dolor erat. Vestibulum placerat.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner 