import { FaPen, FaFolderOpen, FaDownload } from "react-icons/fa";

import { Link } from "react-router-dom";

import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import { getAllJournals } from "../../store/actions/journal";

import { exportJournalsToPDF } from "../utils/exportPDF";



const ActionBtns = () => {

   const {user} = useSelector(state => state.auth);

   const dispatch = useDispatch();

   const {journals} = useSelector(state => state.journal);

   console.log('journals:', journals)

// function exportToCSV(entries, filename) {
//   const csvHeader = ["Date", "Mood", "Sentiment Score", "Text"];
//   const csvRows = entries?.map(entry => [
//     new Date(entry?.createdAt).toLocaleDateString(),
//     entry?.moodLabel,
//     entry?.sentimentScore,
//     entry?.content?.replace(/\n/g, " "), // remove line breaks
//   ]);

//   const csvContent =
//     [csvHeader, ...csvRows]
//       .map(e => e.map(v => `"${v}"`).join(","))
//       .join("\n");

//   const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
//   const url = URL.createObjectURL(blob);

//   const link = document.createElement("a");
//   link.href = url;
//   link.setAttribute("download", `${filename}.csv`);
//   document.body.appendChild(link);
//   link.click();
//   document.body.removeChild(link);
// }


// const handleExport =  () => {

//   exportToCSV(journals, "my_journal_entries");

// };


useEffect(()=>{
  const userId = user?._id; 
  dispatch(getAllJournals(userId));
}, [dispatch])


const handleExportPDF = async () => {
  
  const userName = user?.username;

  exportJournalsToPDF(journals, userName);
};









  return (
    <div className="grid md:grid-cols-3 gap-6">
      <Link to="newJournal">
        <div className="bg-white p-6 rounded-xl shadow text-center hover:bg-indigo-50 cursor-pointer">
          <FaPen className="text-indigo-600 text-3xl mx-auto mb-2" />
          <p className=" font-semibold">Write New Journal</p>
        </div>
      </Link>
      <Link to="allJournalEntries">
        <div className="bg-white p-6 rounded-xl shadow text-center hover:bg-indigo-50 cursor-pointer">
          <FaFolderOpen className="text-indigo-600 text-3xl mx-auto mb-2" />
          <p className=" font-semibold">View All Entries</p>
        </div>
      </Link>

      <button onClick={handleExportPDF}>
        <div className="bg-white p-6 rounded-xl shadow text-center hover:bg-indigo-50 cursor-pointer">
          <FaDownload className="text-indigo-600 text-3xl mx-auto mb-2" />
          <p className=" font-semibold">Export Journals</p>
        </div>
      </button>
    </div>
  );
};

export default ActionBtns;
