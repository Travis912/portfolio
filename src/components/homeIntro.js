import me from "../images/mecopy.png";

export default function HomeIntro() {
  return (
    <div id="homeIntroDiv">
      <img id="homeIntroImage" src={me} alt="me"></img>
      <h1 id="myName">I'm Travis Mounsteven</h1>
      <h3 id="jobTitle">A Front-End React Software Engineer</h3>
    </div>
  );
}
