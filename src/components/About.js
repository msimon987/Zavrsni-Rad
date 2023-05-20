import "./About.css";
import team1 from "./Images/team1.jpg"
import team2 from "./Images/team2.jpg"
import team3 from "./Images/team3.jpg"


const About = () =>{
    return<div>
        <div class="about-section" >
            <div class="about-container">
            <h1 style={{ fontSize: 60 }}>Make work life simpler, more pleasant and more productive.</h1>
            <div class="description-container">
            <p>Super Cool Chat is the productivity platform that empowers everyone with no-code automation and AI, makes search and knowledge sharing seamless, and keeps teams connected and engaged. Around the world, Super Cool Chat is the platform companies trust and people love to use.</p>
            </div>
            </div>
        </div>
    <h2 class="ourTeam"> Our Team</h2>
<div class="row">
  <div class="column">
    <div class="card">
      <img src={team1} alt="Jane" ></img>
      <div class="container">
        <h2>Jane Doe</h2>
        <p class="title">CEO & Founder</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>jane@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={team2} alt="Mike" ></img>
      <div class="container">
        <h2>Mike Ross</h2>
        <p class="title">Art Director</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>mike@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>

  <div class="column">
    <div class="card">
      <img src={team3} alt="John" ></img>
      <div class="container">
        <h2>John Doe</h2>
        <p class="title">Designer</p>
        <p>Some text that describes me lorem ipsum ipsum lorem.</p>
        <p>john@example.com</p>
        <p><button class="button">Contact</button></p>
      </div>
    </div>
  </div>
    </div>
</div>
    
    
}
export default About;