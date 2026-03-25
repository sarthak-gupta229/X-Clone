import React from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, Search } from "lucide-react";
import { useState, useEffect } from "react";
import people from "../../../data/x_famous_people_all200.json";
import { BadgeCheck } from "lucide-react";

function Explore() {
  const [search, setSearch] = useState("");
  const [filteredPeople, setFilteredPeople] = useState([]);
  useEffect(() => {
    if (search === "") {
      setFilteredPeople([]);
    } else {
      setFilteredPeople(
        people.filter((person) =>
          person.name.toLowerCase().includes(search.toLowerCase()),
        ),
      );
    }
  }, [search]);
  function Card({ post }) {
    return (
      <div className="flex py-5 px-6 gap-2 justify-between flex-col border-b-1 border-[#2f3336]">
        <div className="flex gap-4">
          <img
            src={post.avatar}
            onError={(e) => {
              e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${post.username}`;
            }}
            className="w-10 h-10 rounded-full"
          />
          <div className="flex flex-col">
            <h1>{post.name}</h1>
            <h1 className="text-gray-500">@{post.username}</h1>
            <h1 className="text-gray-500">Followers : {post.followers}</h1>
          </div>

          <span>
            <BadgeCheck className="text-blue-500" />
          </span>
        </div>
        <div>
          <p className="text-gray-400">Bio : {post.bio}</p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex-1 border-r border-r-[#2f3336] overflow-y-auto h-screen">
      <div className="h-fit border-1 border-[#2f3336] flex items-center gap-5 p-3">
        <Link key="/app/home" to="/app/home" className=" rounded-full h-[50] ">
          <ArrowLeft />
        </Link>
      </div>

      <div className="flex items-center gap-3 bg-black px-4 py-2 mb-2 rounded-full border-1 border-[#2f3336] focus-within:outline-none focus-within:ring-0 focus-within:border-[#1d9bf0] my-3 mx-3">
        <Search size={20} className="text-gray-400" />
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search"
          className="bg-transparent outline-none text-sm text-white w-full placeholder-gray-400"
        />
      </div>
      <div className="border-1 border-[#2f3336] h-fit">
        {filteredPeople.map((person) => (
          <Card key={person.id} post={person} />
        ))}
      </div>
    </div>
  );
}

export default Explore;
