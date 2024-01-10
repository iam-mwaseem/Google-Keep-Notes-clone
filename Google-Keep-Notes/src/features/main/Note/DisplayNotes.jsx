export default function DisplayNotes({ title, note }) {
  console.log(title);
  return (
    <div className=" flex flex-col h-min border w-[240px]  mt-4">
      <div className="w-[238px]  h-auto">
        <p className="px-2 pt-3">{title}</p>
      </div>
      <div className="  w-[238px]  h-auto">
        <p className="px-2 pt-3">{note}</p>
      </div>
      <div className=" flex justify-end w-[238px]  h-auto">
        <button className="mt-0 px-4  bg-white-500 text-black rounded-md">
          Delete Note
        </button>
      </div>
    </div>
  );
}

/*
min-h-[38px]
min-h-[48px]
min-h-[34px]
*/
