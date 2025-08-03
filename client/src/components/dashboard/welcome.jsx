import { useSelector } from "react-redux";

const WelcomeSection = () => {

  const {user} = useSelector(state => state.auth);

    return (
       <div>
         <div className="bg-gradient-to-r from-indigo-100 to-purple-100 p-6 rounded-2xl shadow-md 
        ">
          <h2 className="text-2xl font-semibold">Welcome back, {user?.username}!</h2>
          <p className="text-gray-600">Here's how you've been feeling lately.</p>
        </div>
       </div>
    )
}


export default WelcomeSection;