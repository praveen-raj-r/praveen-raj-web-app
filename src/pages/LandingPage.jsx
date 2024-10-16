import ProjectsContainer from "../components/app/ProjectsContainer";
import Greeting from "../components/app/Greeting";
import Profile from "../components/app/Profile";

function LandingPage() {
  return (
    <>
      <Profile />
      <ProjectsContainer landingPage={true} />
      <Greeting />
    </>
  );
}

export default LandingPage;
