



const Suggestions = ({suggestions}) => {

  console.log('Suggestions:', suggestions)

    return (
        <div className="bg-white p-6 rounded-xl shadow">
          <h3 className="text-lg font-semibold mb-2">
            Based on your recent entries...
          </h3>
          <ul className="list-disc list-inside text-gray-600">
            {suggestions?.map((suggestion, index) =>(
              <li key={index}>{suggestion}</li>
            )

            )

            }
           
          </ul>
        </div>
    )
}


export default Suggestions