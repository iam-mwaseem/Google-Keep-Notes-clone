import { useAppLayout } from "../../contexts/AppLayoutContext";

export default function Main({ children }) {
  const { sidebar, setSideBar } = useAppLayout();
  return (
    <div className={`flex mt-2 w-[100%] transition-all duration-300`}>
      {children}
    </div>
  );
}
