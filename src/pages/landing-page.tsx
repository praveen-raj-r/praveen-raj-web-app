import Description from "@/components/app/landing-page/description";
import Profile from "@/components/app/landing-page/profile";

const LandingPage = () => {
  return (
    <div className="p-3">
      <div className="">
        <Profile />
        <Description />
        <h4 className="my-10 text-2xl font-medium text-center sm:text-3xl gradient sky-2">
          Building what I love.
        </h4>
      </div>
    </div>
  );
};
export default LandingPage;
