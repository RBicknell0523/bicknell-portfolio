import { FooterLink } from "@/types/footerLink";

const FooterLinkList = ({
  title,
  links,
}: {
  title: string;
  links: FooterLink[];
}) => {
  return (
    <div>
      <h3 className="mb-5 font-semibold text-foreground">{title}</h3>
      <ul className="flex flex-col gap-3">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.href}
              target={link.newTab ? "_blank" : "_self"}
              rel={link.newTab ? "nofollow noreferrer" : ""}
              className="text-sm text-muted-foreground transition-colors duration-200 hover:text-primary"
            >
              {link.title}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinkList;
