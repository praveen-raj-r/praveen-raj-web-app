const timelines = [
  {
    range: "2015 - 2016",
    label: [
      { text: "education", class: "yellow" },
      { text: "SSLC", class: "green" },
    ],
    title: "SSLC",
    desc: "Studied @ Swami Vivekananda Maticulation Hr. Sec. School and Secured 91%",
    img: "",
    class: "yellow",
  },
  {
    range: "2017 - 2018",
    label: [
      { text: "education", class: "yellow" },
      { text: "HSC", class: "green" },
    ],
    title: "HSC",
    desc: "Studied @ Swami Vivekananda Maticulation Hr. Sec. School and Secured 60.75%",
    img: "",
    class: "purple",
  },
  {
    range: "2018 - 2022",
    label: [
      { text: "education", class: "yellow" },
      { text: "graduate", class: "green" },
    ],
    title: "B.E. Electrical And Electronics Engineering",
    desc: "Grudated from Meenakshi College Of Engineering and Secured 8.15 CGPA",
    img: "",
    class: "yellow",
  },
  {
    range: "May 2023 - present",
    label: [{ text: "work", class: "orange" }],
    title: "LCS Controls Private Limited.",
    desc: "Working as a Frontend Engineer",
    img: "",
    class: "green",
  },
];

function TimeLinesContainer() {
  return (
    <div className=" pt-14">
      {timelines.map((item, i) => (
        <TimeLineItem item={item} key={`timeline-${i}`} />
      ))}
    </div>
  );
}

function TimeLineItem({ item }) {
  return (
    <div className="relative w-full mx-auto my-0 cursor-pointer">
      <a className="flex justify-center" href="">
        <div className="min-w-[100px] max-w-[100px] mr-5 -mt-1">
          <p className="text-sm font-semibold text-right">{item.range}</p>
        </div>
        <div className="w-[420px] relative pl-4 pb-12 border-l border-[#ecedee26] design-dot">
          <div className="relative">
            <div className="flex flex-col p-3 -translate-y-5 design-hover-before">
              <div>
                {item.label.map((i, j) => (
                  <div
                    key={`label-${j}`}
                    className={`relative inline-grid text-[13px] font-bold leading-[18px] px-1.5 py-px rounded-[9px] mr-1.5 ${i.class}`}
                  >
                    {i.text}
                  </div>
                ))}
              </div>
              <h3 className="mx-0 my-2 text-lg">{item.title}</h3>
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
