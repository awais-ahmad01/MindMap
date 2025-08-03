

const  {GoogleGenerativeAI} = require("@google/generative-ai");

// Replace with your actual API key
const genAI = new GoogleGenerativeAI(process.env.API_KEY);

const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });



async function analyzeJournalContent(content) {
    try{

        const prompt = `You are a helpful mental wellness assistant. Analyze the user's journal entry and return:
- A mood label (e.g., Happy, Anxious, Sad, Relaxed)
- A sentiment score from 0 (very negative) to 10 (very positive)
- A fitting emoji for the mood
- 5 or 6 helpful suggestions or affirmations
Return your response in valid JSON format like:
{
  "moodLabel": "Anxious",
  "sentimentScore": 4.3,
  "moodEmoji": "😟",
  "aiSuggestions": ["Take a short walk", "Try deep breathing for 5 minutes"]
}
Return only the JSON object, without Markdown formatting or backticks.
Content: ${content}`;


       const result = await model.generateContent(prompt);
        
         const parsedResponse = JSON.parse(result.response.text());

            console.log(parsedResponse);
            console.log("Mood Label:", parsedResponse.moodLabel);
            console.log("Sentiment Score:", parsedResponse.sentimentScore);
            console.log("Mood Emoji:", parsedResponse.moodEmoji);
            console.log("AI Suggestions:", parsedResponse.aiSuggestions.join(", "));

        return parsedResponse;
    }
    catch(error) {
        console.error('Error analyzing journal content:', error);
        throw new Error('Failed to analyze journal content');
    }
}


module.exports = {
    analyzeJournalContent
};
