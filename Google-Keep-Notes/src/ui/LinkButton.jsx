import { Link } from "react-router-dom";
export default function LinkButton({ children, to, onHandleClick }) {
  const className = ' rounded-full  w-full mt-2"';

  return (
    <Link onClick={onHandleClick} to={to} className={className}>
      {children}
    </Link>
  );
}

/*
  <button className={className} onClick={onHandleClick}>
      {children}
    </button>

*/
