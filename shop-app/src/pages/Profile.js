import React from "react";

const Profile = () => {
  return (
    <div className="w-[300px] m-auto">
      <h1 className="text-center text-2xl font-bold pt-12">My Profile</h1>
      <div>
        <p>Welcome user!</p>
      </div>
      <button className="border py-2 px-5 mt-10">Logout</button>
    </div>
  );
};

export default Profile;
