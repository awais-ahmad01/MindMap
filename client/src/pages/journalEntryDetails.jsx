import { Modal } from "@mantine/core";

const JournalEntryDetailsModal = ({ opened, onClose, entry }) => {
  if (!entry) return null;

  return (
    <Modal
      opened={opened}
      onClose={onClose}
      title="Journal Entry Details"
      size="lg"
      centered
    >
      <div className="space-y-3">
        <p>
          <span className="font-semibold">Date:</span>{" "}
          {new Date(entry?.createdAt).toLocaleDateString()}
        </p>
        <p>
          <span className="font-semibold">Mood:</span> {entry?.moodLabel}{" "}
          <span className="text-xl">{entry?.moodEmoji || ""}</span>
        </p>
        <p>
          <span className="font-semibold">Sentiment Score:</span>{" "}
          {entry?.sentimentScore?.toFixed(1)} / 10
        </p>
        <div>
          <p className="font-semibold">Suggestions:</p>
          <ul className="list-disc ml-5 text-gray-700">
            {entry?.aiSuggestions?.length > 0 ? (
              entry?.aiSuggestions.map((sug, i) => <li key={i}>{sug}</li>)
            ) : (
              <li>No suggestions available.</li>
            )}
          </ul>
        </div>
        <div>
          <p className="font-semibold">Journal Text:</p>
          <p className="bg-gray-100 p-3 rounded text-gray-800 whitespace-pre-line">
            {entry?.content}
          </p>
        </div>
      </div>
    </Modal>
  );
};

export default JournalEntryDetailsModal;
