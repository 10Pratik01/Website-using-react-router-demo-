import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

const Github = () => {
  // const [data, setData] = useState([])
  // useEffect( () => {
  //     fetch('https://api.github.com/users/10Pratik01')
  //     .then(response => response.json())
  //     .then(data => {setData(data)})
  // }, [])
  const data = useLoaderData();
  return (
     <div className="bg-gray-100 min-h-10 p-4 flex justify-center items-start">
      <div className="max-w-4xl w-full bg-white rounded-xl shadow-md p-6">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row items-center mb-6">
          <img
            src={data.avatar_url}
            alt="Avatar"
            className="rounded-full w-32 h-32 mb-2 md:mb-0 md:mr-6 border-4 border-blue-200"
          />
          <div className="text-center md:text-left space-y-1">
            <h1 className="text-3xl font-bold text-gray-800">{data.name}</h1>
            <p className="text-gray-500">@{data.login}</p>
            <p className="text-sm text-gray-600">User ID: {data.id}</p>
          </div>
        </div>

        {/* Bottom Section - Info */}
        <div className="text-gray-700 space-y-2 text-sm md:text-base">
          <p><span className="font-semibold">Visibility:</span> {data.user_view_type || "N/A"}</p>
          <p><span className="font-semibold">Bio:</span> {data.bio || "No bio available"}</p>
          <p><span className="font-semibold">Followers:</span> {data.followers}</p>
          <p><span className="font-semibold">Created On:</span> {new Date(data.created_at).toLocaleDateString()}</p>
          <p><span className="font-semibold">Last Updated:</span> {new Date(data.updated_at).toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
};

export default Github;

export const githubinfolaoder = async () => {
  const response = await fetch("https://api.github.com/users/10Pratik01");
  return response.json();
};

{
  /* <p>Name: {data.login} </p>
            <p>Id : {data.id} </p>
            <p>About : {data.bio} </p>
            <p>Created : {data.created_at} </p> */
}
