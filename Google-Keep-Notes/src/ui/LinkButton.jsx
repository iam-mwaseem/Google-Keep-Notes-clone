import { Link } from "react-router-dom";

export default function LinkButton({ children, to, onHandleClick }) {
  return (
    <Link onClick={onHandleClick} to={to}>
      {children}
    </Link>
  );
}
