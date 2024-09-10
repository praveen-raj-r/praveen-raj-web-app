import ProjectsContainer from "../components/ui/ProjectsContainer";
import Greeting from "../components/ui/Greeting";
import Profile from "../components/ui/Profile";

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
