import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { dropDownData } from "@/data/header";
import { ChevronDown } from "lucide-react";
import { Link } from "react-router-dom";

const MoreMenu = () => {
    return (
        <div className="hidden md:block">
            <DropdownMenu>
                <DropdownMenuTrigger className="outline-none">
                    <span className="block relative py-0 px-2.5 opacity-80 hover:opacity-100">
                        <span className="font-medium leading-5 tracking-[0.5px] text-lg capitalize flex items-end gap-1">
                            more <ChevronDown size={18} />
                        </span>
                    </span>
                </DropdownMenuTrigger>

                <DropdownMenuContent>
                    {dropDownData.map((i) => (
                        <Link key={i.label} to={i.link}>
                            <DropdownMenuItem className="text-base font-normal text-gray-50 focus:bg-transparent focus:opacity-100 opacity-40 cursor-pointer">
                                {i.label}
                            </DropdownMenuItem>
                        </Link>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
};

export default MoreMenu;
