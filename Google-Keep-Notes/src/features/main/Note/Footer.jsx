export default function Footer({ onHandleAddNotes }) {
  return (
    <div className="flex justify-end">
      <button
        onClick={onHandleAddNotes}
        className="mt-2 px-4 py-2 bg-red-500 text-white rounded-md"
      >
        Add Note
      </button>
    </div>
  );
}
