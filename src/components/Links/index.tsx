import { Ilink } from "./types";
import "./style.scss";

const LinkGroup: React.FC<Ilink> = ({ links, title }) => {
  return (
    <section className="linkgroup">
      <h4 className="linkgroup__heading">{title}</h4>
      <ul>
        {links.map((link, index: number) => {
          return (
            <li key={index}>
              <a href="#">
                {link.icon}
                <span>{link.text}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default LinkGroup;
