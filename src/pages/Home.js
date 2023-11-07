import "../css/Home.css";
import HomeIntro from "../components/homeIntro";
import FeaturedProjects from "../components/featuredProjects";
import Skills from "../components/skills";

export default function Home() {
  return (
    <div id="homeDiv">
      <HomeIntro></HomeIntro>
      <Skills></Skills>
      <FeaturedProjects></FeaturedProjects>
    </div>
  );
}
