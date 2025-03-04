import Description from "@/components/app/landing-page/description";
import MailMe from "@/components/app/landing-page/mail-me";
import Profile from "@/components/app/landing-page/profile";
import Works from "@/components/app/landing-page/works";

const LandingPage = () => {
  return (
    <div className="p-3">
      <div className="">
        <Profile />
        <Description />
        <h4 className="my-10 text-2xl font-medium text-center sm:text-3xl gradient sky-2">
          Building what I love.
        </h4>
        <Works />
        <MailMe />
      </div>
    </div>
  );
};

export default LandingPage;
