import Project from "./project";
import calculator from "../images/calculator.png";
import wordle from "../images/wordle.png";
import ConnectFour from "../images/connectFour.png";
import midjourney from "../images/midjourney1.png";

export default function FeaturedProjects() {
  return (
    <div id="featuredProjectsDiv">
      <h2 id="ft-projects-title">Featured Projects:</h2>
      <Project image={midjourney}>
        <h4>Quiz</h4>
      </Project>
      <Project image={wordle} project="wordle">
        <h4>Wordle</h4>
      </Project>
      <Project image={ConnectFour} project="connectFour">
        <h4>Connect Four</h4>
      </Project>
      <Project image={midjourney}>
        <h4>Memory</h4>
      </Project>
      <Project image={calculator} project="calculator">
        <h4>Calculator</h4>
      </Project>
    </div>
  );
}
