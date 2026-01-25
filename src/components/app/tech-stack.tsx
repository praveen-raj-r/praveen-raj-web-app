import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import techStacks, { badgeStyles } from "@/data/tech-stack";
import { LayoutGrid, List } from "lucide-react";
import DesignedHeading from "@/components/app/designed-heading";
import { Dialog, DialogContent } from "../ui/dialog";

const TechStack = () => {
  return (
    <div id="tech-stack" className="mt-4 md:mt-10 py-4 px-0 scroll-mt-40">
      <div className="relative items-center max-w-[708px] w-full mx-auto px-2 md:px-0">
        <div>
          <DesignedHeading
            heading="Tech Stack"
            description="Tools and technologies I use regularly to build, ship, and maintain modern web applications."
          />
          <GridOrList />
        </div>
      </div>
    </div>
  );
};

const VIEW = {
  GRID: "grid",
  LIST: "list",
} as const;

type TechItem = {
  link: string;
  img: string;
  description: string;
  appBadge: string;
  name: string;
};

const GridOrList = () => {
  const VIEW_TYPE_KEY = "apps_view_type";
  const [confirmOpen, setConfirmOpen] = useState(false);
  const [pendingUrl, setPendingUrl] = useState<string | null>(null);
  const [clickedItem, setClickedItem] = useState<TechItem | undefined>();

  const openConfirm = (url: string) => {
    setPendingUrl(url);
    setConfirmOpen(true);
  };

  const handleConfirm = () => {
    if (pendingUrl) {
      window.open(pendingUrl, "_blank");
    }
    setConfirmOpen(false);
  };

  const [viewType, setViewType] = useState<(typeof VIEW)[keyof typeof VIEW]>(
    () => {
      if (typeof window === "undefined") return VIEW.GRID;

      const stored = localStorage.getItem(VIEW_TYPE_KEY);
      return stored === VIEW.LIST || stored === VIEW.GRID ? stored : VIEW.GRID;
    },
  );
  const isGrid = viewType === VIEW.GRID;
  useEffect(() => {
    localStorage.setItem(VIEW_TYPE_KEY, viewType);
  }, [viewType]);

  return (
    <>
      <div>
        <div className="flex items-center justify-center w-fit mx-auto mb-6 gap-3 font-semibold text-sm dark:text-[#fdfdff] text-[#222]">
          <span>Grid</span>

          <div className="flex justify-center w-fit bg-[#22242c26] dark:bg-[#ecedee26] rounded-[22px] p-0.5">
            {[
              { icon: LayoutGrid, type: VIEW.GRID },
              { icon: List, type: VIEW.LIST },
            ].map(({ icon: Icon, type }) => (
              <button
                key={type}
                onClick={() => setViewType(type)}
                className={cn(
                  "flex p-1 rounded-[18px] cursor-pointer transition-colors",
                  viewType === type
                    ? "text-white bg-[linear-gradient(90deg,#F7BE2B_0%,#F537F9_100%)]"
                    : "text-[#72788899]",
                )}
              >
                <Icon className="size-4" />
              </button>
            ))}
          </div>

          <span>List</span>
        </div>
        <div
          className={cn(
            "relative mt-3 mx-auto grid gap-2 p-1 w-fit",
            "transition-all duration-250 ease-[cubic-bezier(0.02,0.01,0.47,1)]",
            isGrid ? "grid-cols-5 max-md:grid-cols-4" : "grid-cols-1",
            "max-md:columns-2 max-md:gap-0.5",
          )}
        >
          {techStacks.map((item) => (
            <SkillItem
              setClickedItem={setClickedItem}
              key={item.link}
              item={item}
              isGrid={isGrid}
              openConfirm={openConfirm}
            />
          ))}
        </div>
      </div>
      <Dialog open={confirmOpen} onOpenChange={setConfirmOpen}>
        <DialogContent className="rounded-2xl dark:bg-[#111] border border-white/10 gap-2">
          <h2 className="text-lg font-semibold dark:text-white">
            Leaving this website
          </h2>

          <p className="text-sm opacity-70">
            This link will take you to{" "}
            <span className="dark:text-fuchsia-400 text-teal-900 font-semibold">
              {clickedItem?.name}
            </span>{" "}
            Website. Do you want to continue?
          </p>

          <div className="flex justify-end gap-3 mt-4">
            {/* Cancel */}
            <button
              onClick={() => setConfirmOpen(false)}
              className="cursor-pointer px-4 py-2 rounded-xl bg-black/10 dark:bg-white/10 hover:bg-black/20 dark:hover:bg-white/20 transition"
            >
              Cancel
            </button>

            {/* Confirm */}
            <button
              onClick={handleConfirm}
              className="cursor-pointer sm:px-6 px-3 py-1.5 sm:py-3 rounded-xl font-medium transition bg-blue-600 hover:bg-blue-700 text-white"
            >
              Continue →
            </button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

const SkillItem = ({
  setClickedItem,
  item,
  isGrid,
  openConfirm,
}: {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setClickedItem: any;
  isGrid: boolean;
  openConfirm: (url: string) => void;
  item: TechItem;
}) => {
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        openConfirm(item.link);
        setClickedItem(item);
      }}
      className="cursor-pointer flex items-center m-0 p-3 md:p-4 hover:border-transparent transition-[333ms] relative before:content-[''] before:absolute before:-z-10 before:-inset-0.5 before:rounded-[14px] md:before:rounded-2xl before:block before:opacity-0 before:scale-[0.8] before:transition-[333ms] hover:before:opacity-100 dark:hover:before:bg-[linear-gradient(90deg,#1e1c32cc_0%,#2b161db2_100%)] hover:before:scale-100 hover:before:bg-[linear-gradient(90deg,#ef87bb66_0%,#605b9945_100%)]"
    >
      <div
        className={cn(
          "transition-[250ms_cubic-bezier(0.02,0.01,0.47,1)] relative leading-0",
          isGrid ? "w-15 rounded-xl" : "w-24 ",
        )}
      >
        <span
          className={cn(
            "inline-block w-24 box-border overflow-hidden h-auto bg-none opacity-100 border-0 m-0 p-0 relative max-w-full",
            isGrid ? "rounded-xl" : "rounded-[12px]",
          )}
        >
          <span
            className={cn(
              "block box-border w-24 h-auto bg-none opacity-100 border-0 m-0 p-0 max-w-full",
              isGrid ? "rounded-xl" : "rounded-[12px]",
            )}
          >
            <img
              className={cn(
                "block max-w-full w-auto h-auto bg-none opacity-100 border-0 m-0 p-0",
                isGrid ? "rounded-xl" : "rounded-[12px]",
              )}
              src="/tech-stack-item-bg.svg"
              alt=""
            />
          </span>
          <img
            className={cn(
              "absolute inset-0 box-border p-0 border-0 dark:filter-[invert(1)] m-auto block w-0 h-0 min-w-full max-w-full min-h-full max-h-full ",
              isGrid ? "rounded-xl" : "rounded-[12px]",
            )}
            src={item.img}
            alt=""
          />
        </span>
      </div>
      <div
        className={cn(isGrid ? "hidden" : "flex flex-col ml-4 duration-100")}
      >
        <h3 className="relative flex items-center font-bold mt-0 my-1 md:mt-1 text-[15px] md:text-base tracking-[-0.18px] md:tracking-[-0.4px]">
          {item.name}
          <div
            className={cn(
              "relative inline-grid font-bold text-[10px] md:text-[11px] leading-3.5 px-1.5 py-px rounded-[9px] ml-1.5",
              badgeStyles[item.appBadge],
            )}
          >
            {item.appBadge}
          </div>
        </h3>
        <p className="m-0 mt-0 text-left font-normal opacity-60 leading-[140%] text-sm md:text-[15px] tracking-[-0.15px] md:tracking-[-0.2px]">
          {item.description}
        </p>
      </div>
    </button>
  );
};

export default TechStack;
