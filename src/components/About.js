import "./About.css";
import team1 from "./Images/team1.jpg"
import team2 from "./Images/team2.jpg"
import team3 from "./Images/team3.jpg"


const About = () =>{
    return<div>
        <div className="about-section" >
            <div className="about-container">
            <h1 style={{ fontSize: 60 }}>Make work life simpler, more pleasant and more productive.</h1>
            <div className="description-container">
            <p>Super Cool Chat is the productivity platform that empowers everyone with no-code automation and AI, makes search and knowledge sharing seamless, and keeps teams connected and engaged. Around the world, Super Cool Chat is the platform companies trust and people love to use.</p>
            </div>
            </div>
        </div>
    <h2 className="ourTeam"> Our Team</h2>
<div className="row">
  <div className="column">
    <div className="card">
      <img src={team1} alt="Jane" ></img>
      <div className="container">
        <h2>Jane Doe</h2>
        <p className="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={team2} alt="Mike" ></img>
      <div className="container">
        <h2>Mike Ross</h2>
        <p className="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div className="column">
    <div className="card">
      <img src={team3} alt="John" ></img>
      <div className="container">
        <h2>John Doe</h2>
        <p className="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button className="button">Contact</button></p>
      </div>
    </div>
  </div>
    </div>
</div>
    
    
}
export default About;