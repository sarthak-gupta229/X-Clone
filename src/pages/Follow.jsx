import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import FollowCard from "../components/follow/FollowCard";
import { Link } from "react-router-dom";
import { ArrowLeft } from "lucide-react";
import people from "../../data/x_famous_people_all200.json";
import Mobilebar from "../components/mobilebar/Mobilebar";

function Follow() {
  const { posts, setPosts, following, setfollowing, follow, setFollow } =
    useContext(UserContext);

  return (
    <>
      <div className="flex-1 border-r border-r-[#2f3336] overflow-y-auto h-screen ">
        <div className="h-fit border-1 border-[#2f3336] flex items-center gap-5 p-3 z-10 sticky top-0 bg-black/80 backdrop-blur-md">
          <Link
            key="/app/home"
            to="/app/home"
            className=" rounded-full h-[50] "
          >
            <ArrowLeft />
          </Link>
          <div className="flex justify-center items-center h-12">
            <h1>Following : {following}</h1>
          </div>
        </div>
        {people.map((follow) => (
          <FollowCard
            post={follow}
            following={following}
            setfollowing={setfollowing}
          />
        ))}
        <Mobilebar />
      </div>
    </>
  );
}

export default Follow;
