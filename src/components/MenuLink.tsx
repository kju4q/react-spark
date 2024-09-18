import { Link, LinkProps } from "react-router-dom";

type MenuLinkProps = {
  to: string;
  className: string;
  children: React.ReactNode;
};

const MenuLink = ({ to, className, children }: MenuLinkProps) => (
  <Link to={to} className={className}>
    {children}
  </Link>
);

export default MenuLink;
