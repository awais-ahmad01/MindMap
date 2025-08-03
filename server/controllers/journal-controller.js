const Journal = require('../models/journal');
const {analyzeJournalContent} = require('../utils/analyzeJournal');



async function createJournal(req, res) {
    const {content, userId} = req.body;

    try{


        const response = await analyzeJournalContent(content);

        console.log('Response from analyzeJournalContent:', response);

        if(!response){
            return res.status(500).json({error: 'Failed to analyze content'});
        }

        const newJournal = new Journal({
            content, 
            userId,
            moodLabel: response.moodLabel,
            sentimentScore: response.sentimentScore,
            moodEmoji: response.moodEmoji,
            aiSuggestions: response.aiSuggestions
        })

        const savedJournal = await newJournal.save();

        res.status(201).json({
            message: 'Journal created successfully',
            journal: savedJournal
        })

    }
    catch(error){
        console.error('Error creating journal:', error);
        res.status(500).json({ message: error.message });
    }

}


async function getDashboardData(req, res){

    const {userId} = req.params;

    try{
        const oneWeekAgo = new Date();

        oneWeekAgo.setDate(oneWeekAgo.getDate() - 6);

        const journals = await Journal.find({
            userId,
            createdAt: {$gte: oneWeekAgo}
        }).sort({createdAt: 1})


        if(!journals.length){
            return res.json({
                moddSummary: {},
                moodTrends: [],
                aiSuggestions: []
            })
        }


        const moodSummary = {};
        const moodTrends = [];
        const aiSuggestions = [];


        journals.forEach(entry => {
            moodSummary[entry.moodLabel] = (moodSummary[entry.moodLabel] || 0) + 1;

            moodTrends.push({
                date: entry.createdAt.toISOString().split('T')[0],
                sentimentScore: entry.sentimentScore,
                moodLabel: entry.moodLabel
            });

            if(entry.aiSuggestions?.length){
                aiSuggestions.push(...entry.aiSuggestions);
            }
            
        })

        res.status(200).json({
            moodSummary,
            moodTrends,
            aiSuggestions: aiSuggestions.slice(0,10)
        })
    }
    catch(error){
        res.status(500).json({
            message: error.message
        })
    }

}


async function getAllJournals(req,res) {
    const {userId} = req.params;

    try{
        const journals = await Journal.find({userId});

        if(!journals){
           return res.status(200).json({
            journals: []
           })
        }

         return res.status(201).json({
            journals,
            
        })
    }
    catch(error){
        res.status(400).json({
            message: error.message
        })
    }
}



module.exports = {
    createJournal,
    getDashboardData,
    getAllJournals 
};