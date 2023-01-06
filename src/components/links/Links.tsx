interface props {
  links: any;
}

const Links: React.FC<props> = ({ links }) => {
  return (
    <ul>
      {links.map((link: any, index: number) => {
        return (
          <li className={link.active ? "active" : ""} key={index}>
            <a href="#">
              {link.icon}
              {link.text}
            </a>
          </li>
        );
      })}
    </ul>
  );
};

export default Links;
