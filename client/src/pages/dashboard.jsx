import Header from "../components/dashboard/header";

import WelcomeSection from "../components/dashboard/welcome";

import MoodSummary from "../components/dashboard/moodSummary";

import Chart from "../components/dashboard/chart";

import Suggestions from "../components/dashboard/suggestions";

import ActionBtns from "../components/dashboard/actionBtns";

import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getDashboardData } from "../store/actions/journal";

const Dashboard = () => {
  const dispatch = useDispatch();

  const { dashboardData, isloading } = useSelector((state) => state.journal);

  const {user} = useSelector(state => state.auth);

  console.log("dashboardData:", dashboardData);

  useEffect(() => {
    const userId = user?._id;
    dispatch(getDashboardData(userId));
  }, [dispatch]);

  return (
    <div>
      <main className="py-16 px-6 max-w-5xl mx-auto space-y-10 min-h-screen">
        <WelcomeSection />

        {dashboardData?.moodSummary && (
          <MoodSummary moodSummary={dashboardData?.moodSummary} />
        )}

        {dashboardData?.moodTrends?.length > 0 && (
          <Chart moodTrends={dashboardData?.moodTrends} />
        )}

        {dashboardData?.aiSuggestions.length > 0 && (
          <Suggestions suggestions={dashboardData?.aiSuggestions} />
        )}

        <ActionBtns />
      </main>
    </div>
  );
};

export default Dashboard;
