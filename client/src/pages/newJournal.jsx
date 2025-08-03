import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch, useSelector } from "react-redux";
import { createJournal } from "../store/actions/journal";
import { Loader } from '@mantine/core';

const NewJournal = () => {
  const dispatch = useDispatch();

  const { currentJournal, isloading } = useSelector((state) => state.journal);
  const { user } = useSelector(state => state.auth);

  const schema = yup.object({
    journalEntry: yup.string().required("Journal entry is required"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
    defaultValues: {
      journalEntry: "",
    },
  });

  const onSubmit = (data) => {
    const userId = user?._id;
    dispatch(createJournal({ data, userId }));
  };

  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-100 px-4 sm:px-6 lg:px-8 py-10 space-y-12">
      
      <div className="bg-white w-full max-w-5xl p-6 sm:p-8 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6">✍️ New Journal Entry</h2>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <textarea
              id="journalEntry"
              className="w-full p-3 border border-gray-300 rounded h-40 resize-none"
              placeholder="Write your journal entry here..."
              {...register("journalEntry")}
            ></textarea>
            {errors.journalEntry && (
              <p className="text-red-500 text-sm">{errors.journalEntry.message}</p>
            )}
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white py-2 px-5 rounded hover:bg-blue-700 transition duration-200"
          >
            🔍 Analyze & Save Entry
          </button>
        </form>
      </div>

      <div className="bg-white w-full max-w-5xl p-6 sm:p-8 rounded-lg shadow-md">
        <h1 className="text-2xl font-bold mb-6">AI Response</h1>

        {(!currentJournal && !isloading) && (
          <p className="text-gray-700">Your AI-generated response will appear here after submission.</p>
        )}

        {(!currentJournal && isloading) && <Loader color="blue" />}

        {currentJournal && !isloading && (
          <div className="space-y-2">
            <p className="text-gray-500">MoodLabel: {currentJournal.moodLabel}</p>
            <p className="text-gray-500">Sentiment Score: {currentJournal.sentimentScore}</p>
            <p className="text-gray-500">MoodEmoji: {currentJournal.moodEmoji}</p>

            <h3 className="font-bold mt-4">AI Suggestions:</h3>
            <ul className="list-disc pl-5 space-y-1">
              {currentJournal?.aiSuggestions?.map((suggestion, index) => (
                <li key={index} className="text-gray-500">{suggestion}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewJournal;
