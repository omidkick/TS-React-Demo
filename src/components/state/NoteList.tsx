import React, { useState } from "react";
import { HiPlus } from "react-icons/hi";

const NoteList: React.FC = () => {
  const [note, setNote] = useState("");
  const [notes, setNotes] = useState<string[]>([]);

  const handleAddNote = () => {
    const trimmedNote = note.trim();
    if (trimmedNote) {
      setNotes((prevNotes) => [...prevNotes, trimmedNote]);
      setNote("");
    }
  };

  return (
    <div className="w-full min-h-screen bg-gray-100 flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-purple-700 mb-6">Note List</h1>

      <div className="w-full max-w-md flex items-center gap-3 mb-6">
        <input
          type="text"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Write a note..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-purple-500 text-purple-950"
          aria-label="Note input"
        />
        <button
          onClick={handleAddNote}
          className="flex items-center gap-2 bg-purple-600 text-white px-4 py-2 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500"
          aria-label="Add note"
        >
          <HiPlus className="w-5 h-5" />
          <span>Add</span>
        </button>
      </div>

      <ul className="w-full max-w-md bg-white rounded-lg shadow-md divide-y divide-gray-200">
        {notes.length > 0 ? (
          notes.map((note, index) => (
            <li
              key={index}
              className="px-4 py-2 text-gray-700 hover:bg-gray-100"
            >
              {note}
            </li>
          ))
        ) : (
          <li className="px-4 py-2 text-gray-500 text-center">
            No notes yet. Start adding some!
          </li>
        )}
      </ul>
    </div>
  );
};

export default NoteList;
