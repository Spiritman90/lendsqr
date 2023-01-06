import "./StatCard.scss";

interface props {
  IconSrc: JSX.Element;
  heading: String;
  figure: String;
}

const StatCard: React.FC<props> = ({ IconSrc, heading, figure }) => {
  return (
    <div className="stat">
      <div className="stat__body">
        <div className="stat__icon">{IconSrc}</div>
        <div className="stat__header">
          <p className="stat__text">{heading}</p>
        </div>
      </div>
      <div className="stat__count">
        <p className="stat__number">{figure}</p>
      </div>
    </div>
  );
};

export default StatCard;
