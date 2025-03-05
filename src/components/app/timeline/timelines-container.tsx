interface TimelineItem {
  href?: string;
  range: string;
  label: { text: string; class: string }[];
  title: string;
  desc: string;
}

function TimeLinesContainer({ timelines }: { timelines: TimelineItem[] }) {
  return (
    <div className="flex flex-col-reverse pt-14">
      {timelines.map((item, i) => (
        <TimeLineItem item={item} key={`timelines-${i}`} />
      ))}
    </div>
  );
}

function TimeLineItem({ item }: { item: TimelineItem }) {
  return (
    <div className="relative w-full mx-auto my-0 cursor-pointer">
      <a
        className="flex px-2 pl-4 sm:justify-center"
        href={`${item.href ? item.href : "#"}`}
      >
        <div className="min-w-[100px] max-w-[100px] mr-5 -mt-1 hidden sm:block">
          <p className="text-sm font-semibold text-right">{item.range}</p>
        </div>
        <div className="w-auto sm:w-[420px] relative pl-4 pb-12 border-l dark:border-[#ecedee26] border-[#b180ff] design-dot">
          <div className="relative">
            <div className="flex flex-col p-3 -translate-y-5 design-hover-before">
              <p className="pb-3 text-sm font-semibold text-left sm:hidden ">
                {item.range}
              </p>
              <div>
                {item.label.map((i, j) => (
                  <div
                    key={`timeline-label-${j}`}
                    className={`relative inline-grid text-[13px] font-bold leading-[18px] px-1.5 py-px rounded-[9px] mr-1.5 ${i.class}`}
                  >
                    {i.text}
                  </div>
                ))}
              </div>
              <h3 className="mx-0 my-2 text-lg font-[900]">{item.title}</h3>
              <p className="text-[15px] leading-[140%] tracking-[-0.18px] mb-3 opacity-90">
                {item.desc}
              </p>
            </div>
          </div>
        </div>
      </a>
    </div>
  );
}
export default TimeLinesContainer;
