import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const Profile = () => {
  return (
    <h2 className="text-4xl sm:text-[50px] md:text-[56px] font-light tracking-[-1.5px] md:tracking-[2.5px] sm:leading-[44px] leading-[34px] md:leading-[54px] max-w-[600px] font-Fraunces mt-3">
      Hi, I'm
      <Dialog>
        <DialogTrigger>
          <Avatar className="size-8 sm:size-16 ml-2 mr-1.5">
            <AvatarImage src="https://github.com/praveen-raj-r.png" />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
        </DialogTrigger>
        <DialogContent className="bg-transparent border-none [&>button]:hidden">
          <div className="flex justify-center items-center">
            <Avatar className="size-80 drop-shadow-md">
              <AvatarImage src="https://github.com/praveen-raj-r.png" />
              <AvatarFallback>PR</AvatarFallback>
            </Avatar>
          </div>
        </DialogContent>
      </Dialog>
      Praveen Raj
    </h2>
  );
};

export default Profile;
