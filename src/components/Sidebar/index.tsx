import "./style.scss";
import UserFriends from "../../assets/svgs/UserFriends";
import UsersIcon from "../../assets/svgs/UsersIcon";
import SackIcon from "../../assets/svgs/SackIcon";
import Piggybank from "../../assets/svgs/Piggybank";
import HandshakeIcon from "../../assets/svgs/HandshakeIcon";
import LoanRequestIcon from "../../assets/svgs/LoanRequestIcon";
import WhitelistIcon from "../../assets/svgs/WhitelistIcon";
import Karma from "../../assets/svgs/Karma";
import Briefcase from "../../assets/svgs/Briefcase";
import LoanProductsIcon from "../../assets/svgs/LoanProductsIcon";
import SavingsAndProductsIcon from "../../assets/svgs/SavingsAndProductsIcon";
import FeesAndCharges from "../../assets/svgs/FeesAndCharges";
import TransactionIcon from "../../assets/svgs/TransactionIcon";
import ServicesIcon from "../../assets/svgs/ServicesIcon";
import ServiceAccountIcon from "../../assets/svgs/ServiceAccountIcon";
import SettlementIcon from "../../assets/svgs/SettlementIcon";
import ReportsIcon from "../../assets/svgs/ReportsIcon";
import PreferencesIcon from "../../assets/svgs/PreferencesIcon";
import FeesAndPricing from "../../assets/svgs/FeesAndPricing";
import Audit from "../../assets/svgs/Audit";
import DownArrow from "../../assets/svgs/DownArrow";
import HomeIcon from "../../assets/svgs/HomeIcon";
import Links from "../Links";

const SideBar = () => {
  const links1 = [
    {
      text: "Users",
      icon: <UserFriends />,
    },
    {
      text: "Guarantors",
      icon: <UsersIcon />,
    },
    {
      text: "Loans",
      icon: <SackIcon />,
    },
    {
      text: "Decision Models",
      icon: <Piggybank />,
    },
    {
      text: "Savings",
      icon: <HandshakeIcon />,
    },
    {
      text: "Loan Requests",
      icon: <LoanRequestIcon />,
    },
    {
      text: "Whitelist",
      icon: <WhitelistIcon />,
    },
    {
      text: "Karma",
      icon: <Karma />,
    },
  ];
  const links2 = [
    {
      text: "Organization",
      icon: <Briefcase />,
    },
    {
      text: "Loan Products",
      icon: <LoanProductsIcon />,
    },
    {
      text: "Savings Products",
      icon: <SavingsAndProductsIcon />,
    },
    {
      text: "Fees and Charges",
      icon: <FeesAndCharges />,
    },
    {
      text: "Transactions",
      icon: <TransactionIcon />,
    },
    {
      text: "Services",
      icon: <ServicesIcon />,
    },
    {
      text: "Service Account",
      icon: <ServiceAccountIcon />,
    },
    {
      text: "Settlements",
      icon: <SettlementIcon />,
    },
    {
      text: "Reports",
      icon: <ReportsIcon />,
    },
  ];
  const links3 = [
    {
      text: "Preferences",
      icon: <PreferencesIcon />,
    },
    {
      text: "Fees and Pricing",
      icon: <FeesAndPricing />,
    },
    {
      text: "Audit Logs",
      icon: <Audit />,
    },
  ];
  return (
    <div className="sidebar">
      <div className="sidebar__organization">
        <Briefcase />
        <p className="sidebar__heading">Switch Organization</p>
        <DownArrow />
      </div>
      <div className="sidebar__dashboard">
        <HomeIcon />
        <p className="sidebar__heading2">Dashboard</p>
      </div>
      <div className="sidebar__links">
        <Links links={links1} title="CUSTOMERS" />
        <Links links={links2} title="BUSINESSES" />
        <Links links={links3} title="SETTINGS" />
      </div>
    </div>
  );
};

export default SideBar;
