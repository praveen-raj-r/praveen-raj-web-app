import ProfileImg from "./profile-img";

const Profile = () => {
  return (
    <h2 className="text-4xl sm:text-[50px] md:text-[56px] font-light tracking-[-1.5px] md:tracking-[2.5px] sm:leading-[44px] leading-[34px] md:leading-[54px] sm:max-w-[600px] font-Fraunces mt-10 sm:mt-16">
      Hi, I'm
      <ProfileImg />
      Praveen Raj
    </h2>
  );
};

export default Profile;
