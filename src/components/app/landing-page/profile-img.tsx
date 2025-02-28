import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const imgSrc = "https://github.com/praveen-raj-r.png";

const ProfileImg = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <Avatar className="size-8 sm:size-16 ml-2 mr-1.5">
          <AvatarImage src={imgSrc} />
          <AvatarFallback>PR</AvatarFallback>
        </Avatar>
      </DialogTrigger>

      <DialogContent className="bg-transparent border-none [&>button]:hidden">
        <div className="flex justify-center items-center">
          <Avatar className="size-80 drop-shadow-md">
            <AvatarImage src={imgSrc} />
            <AvatarFallback>PR</AvatarFallback>
          </Avatar>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProfileImg;
