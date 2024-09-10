function FooterLink({ link }) {
  return (
    <li>
      <a
        className="text-[13px] font-medium text-[#72788899] cursor-pointer opacity-40 py-0 px-2"
        href={`${link.url}`}
      >
        {link.text}
      </a>
    </li>
  );
}
export default FooterLink;
