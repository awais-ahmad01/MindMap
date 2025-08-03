

const MoodSummary = ({moodSummary})=>{

    console.log('moodSummry:', moodSummary)

    return (
        <div className="bg-white p-6 rounded-xl shadow text-center">
            <h3 className="text-lg font-semibold">Mood Summary</h3>
            {/* <div className="mt-4 text-4xl">😐</div> */}
            {moodSummary && Object.entries(moodSummary)?.map(([mood, count])=>(
                <div key={mood} className="text-gray-800 mt-2">
                    {mood}: {count} times 
                </div>
            ))

            }
            
          </div>
    );
}

export default MoodSummary;