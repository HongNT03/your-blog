import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import DashSidebar from "../components/DashSidebar";
import Dashprofile from "../components/Dashprofile";
import DashPost from "../components/DashPost";
import DashUser from "../components/DashUser";
import DashComment from "../components/DashComment";
import DashboardComponet from "../components/DashboardComponet";

const Dashboard = () => {
  const location = useLocation();
  const [tab, setTab] = useState("");
  useEffect(() => {
    const urlParams = new URLSearchParams(location.search);
    const tabFromUrl = urlParams.get("tab");
    if (tabFromUrl) {
      setTab(tabFromUrl);
    }
  }, [location.search]);
  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <div className="md:w-54">
        {/* side bar */}
        <DashSidebar />
      </div>
      {/* profile... */}
      {tab === "profile" && <Dashprofile />}
      {/* posts... */}
      {tab === "posts" && <DashPost />}
      {/* users... */}
      {tab === "users" && <DashUser />}
      {/* comment... */}
      {tab === "comments" && <DashComment />}
      {/* dashboard... */}
      {tab === "dashboard" && <DashboardComponet />}

    </div>
  );
};

export default Dashboard;
