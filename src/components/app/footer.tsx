import FooterTag from "@/components/app/footer-tag";

const Footer = () => {
  // ✅ Same smooth scroll with header offset
  const handleFooterScroll = (id: string) => {
    const element = document.getElementById(id);
    if (!element) return;

    const headerOffset = 150;

    const y =
      element.getBoundingClientRect().top + window.scrollY - headerOffset;

    window.scrollTo({
      top: y,
      behavior: "smooth",
    });
  };

  return (
    <div className="mt-25">
      <div className="max-w-[708px] mx-auto relative items-center">
        <div className="p-4 flex flex-col justify-center text-center relative">
          {/* ✅ Copyright */}
          <div className="py-1 px-0">
            <h4 className="opacity-80 inline-block rounded-full px-3.5 leading-8 text-base tracking-[0.4px] font-medium m-0">
              © {new Date().getFullYear()} <span>✦</span> Praveen Raj
            </h4>
          </div>

          {/* ✅ Footer Navigation */}
          <div className="py-1 px-0 mb-5">
            <ul className="flex items-center justify-center flex-wrap px-6 md:px-0">
              {[
                { id: "resume", label: "Resume" },
                { id: "projects", label: "Projects" },
                { id: "timeline", label: "Timeline" },
                { id: "tech-stack", label: "Tech Stack" },
                { id: "contact", label: "Contact" },
              ].map(({ id, label }) => (
                <li key={id}>
                  <button
                    onClick={() => handleFooterScroll(id)}
                    className="px-2 block text-[13px] font-normal cursor-pointer opacity-80 dark:text-white hover:opacity-100 transition"
                  >
                    {label}
                  </button>
                </li>
              ))}
            </ul>

            {/* ✅ Footer Tech Text */}
            <h4 className="py-3 text-sm font-medium tracking-[0.1px] opacity-70 dark:text-[#fafafa] mt-2.5">
              Built using{" "}
              <a
                className="font-semibold gradient sky-3"
                href="https://vite.dev/"
                target="_blank"
                rel="noreferrer"
              >
                Vite
              </a>
              , coded in{" "}
              <a
                className="font-semibold gradient sky-3"
                href="https://react.dev/"
                target="_blank"
                rel="noreferrer"
              >
                React
              </a>{" "}
              and deployed on{" "}
              <a
                className="font-semibold gradient sky-3"
                href="https://vercel.com/"
                target="_blank"
                rel="noreferrer"
              >
                Vercel
              </a>
            </h4>
          </div>

          <FooterTag />
        </div>
      </div>
    </div>
  );
};

export default Footer;
