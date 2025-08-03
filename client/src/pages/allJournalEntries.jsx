import React, { useEffect, useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import JournalEntryDetailsModal from "./journalEntryDetails";
import { useDispatch, useSelector } from "react-redux";

import { getAllJournals } from "../store/actions/journal";

const moodColors = {
  Happy: "bg-green-100 text-green-700",
  Anxious: "bg-yellow-100 text-yellow-700",
  Sad: "bg-blue-100 text-blue-700",
  Angry: "bg-red-100 text-red-700",
  Neutral: "bg-gray-100 text-gray-700",
};

const AllJournalEntries = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [selectedEntry, setSelectedEntry] = useState(null);

  const {user} = useSelector(state => state.auth);

  console.log('user:', user);

  const dispatch = useDispatch();

  const { journals } = useSelector((state) => state.journal);

  console.log("journals:", journals);

  useEffect(() => {
    const userId = user?._id;
    dispatch(getAllJournals(userId));
  }, [dispatch]);

  const handleViewDetails = (entry) => {
    setSelectedEntry(entry);
    open();
  };

  return (
    <div className="px-6 py-16 max-w-4xl mx-auto min-h-screen">
      <h2 className="text-2xl font-bold mb-4">📖 All Journal Entries</h2>

      {journals?.length === 0 ? (
        <div className="text-center text-gray-600 mt-10">
          <p className="text-lg">📝 No journal entries found.</p>
          <p className="text-sm">
            Start writing your thoughts and track your mood!
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {journals.map((entry) => (
            <div
              key={entry?._id}
              className="bg-white rounded-xl shadow p-4 hover:shadow-md transition duration-200"
            >
              <div className="flex justify-between items-center">
                <span className="text-sm text-gray-500">
                  {new Date(entry?.createdAt).toLocaleDateString(undefined, {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </span>
                <span
                  className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    moodColors[entry?.moodLabel] || "bg-gray-200 text-gray-800"
                  }`}
                >
                  {entry?.moodLabel}
                </span>
              </div>
              <div className="mt-2 text-gray-800">
                {entry?.content?.length > 120
                  ? `${entry?.content.slice(0, 120)}...`
                  : entry?.content}
              </div>
              <div className="mt-2 text-sm text-indigo-600 font-semibold">
                Sentiment Score: {entry?.sentimentScore?.toFixed(1)} / 10
              </div>
              <div className="mt-2">
                <button
                  className="text-sm text-blue-600 hover:underline"
                  onClick={() => handleViewDetails(entry)}
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <JournalEntryDetailsModal
        opened={opened}
        onClose={close}
        entry={selectedEntry}
      />
    </div>
  );
};

export default AllJournalEntries;
