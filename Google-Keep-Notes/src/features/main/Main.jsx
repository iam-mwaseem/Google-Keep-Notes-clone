export default function Main({ children, expanded }) {
  return (
    <div className={`flex mt-2 w-[100%] transition-all duration-300`}>
      {children}
    </div>
  );
}
