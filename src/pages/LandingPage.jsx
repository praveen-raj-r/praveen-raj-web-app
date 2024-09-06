import CurrentProjects from "../components/ui/CurrentProjects";
import Greeting from "../components/ui/Greeting";
import Profile from "../components/ui/Profile";

function LandingPage() {
  return (
    <>
      <Profile />
      <CurrentProjects />
      <Greeting />
    </>
  );
}

export default LandingPage;
