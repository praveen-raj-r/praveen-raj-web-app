import { LayoutGrid, List } from "lucide-react";
import { Dispatch, MouseEventHandler, ReactNode, SetStateAction } from "react";

const ToggleButton = ({
    gridStatus,
    setGridStatus,
}: {
    gridStatus: boolean;
    setGridStatus: Dispatch<SetStateAction<boolean>>;
}) => {
    function handleToggle() {
        setGridStatus((s) => !s);
    }

    return (
        <div className="flex items-center justify-center gap-3 mx-auto mt-0 mb-6 text-[#72788899]">
            <span className="text-base font-semibold opacity-40">Grid</span>

            <div className="flex justify-center w-fit bg-[#ecedee26] rounded-[22px] p-0.5">
                <Button onClick={handleToggle} active={gridStatus}>
                    <LayoutGrid size={18} />
                </Button>

                <Button onClick={handleToggle} active={!gridStatus}>
                    <List size={18} />
                </Button>
            </div>

            <span className="text-base font-semibold opacity-40">List</span>
        </div>
    );
};

function Button({
    children,
    active,
    onClick,
}: {
    children: ReactNode;
    active: boolean;
    onClick: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            onClick={onClick}
            className={` flex p-1 bg-transparent rounded-[16px] ${active ? "toogle-button-active" : ""
                }`}
        >
            {children}
        </button>
    );
}
export default ToggleButton;
