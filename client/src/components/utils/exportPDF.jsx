import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";

export function exportJournalsToPDF(entries, username = "user") {
  const doc = new jsPDF();

  // Title
  doc.setFontSize(18);
  doc.text(`${username}'s Journal Entries`, 14, 20);

  // Table Headers
  const headers = [["Date", "Mood", "Score", "Text", "Suggestions"]];

  // Table Rows
  const data = entries.map(entry => [
    new Date(entry?.createdAt).toLocaleDateString(),
    entry?.moodLabel,
    entry?.sentimentScore?.toFixed(1) || "-",
    entry?.content,
    entry.aiSuggestions && entry.aiSuggestions.length > 0
  ? entry.aiSuggestions.map((sug) => `• ${sug}`).join('\n')
  : "N/A",,
  ]);

  autoTable(doc, {
    startY: 30,
    head: headers,
    body: data,
    styles: { fontSize: 9 },
    headStyles: { fillColor: [79, 70, 229] }, 
  });

  doc.save("journal_entries.pdf");
}
