import React, { use } from "react";
import { AuthContext } from "../Components/Context/AuthContext";
import { useNavigate } from "react-router";

const UpdateProfile = () => {

    const navigate = useNavigate()

    const {updateUserInfo}=use(AuthContext)


  const handleUpdate = (e) => {
    e.preventDefault();

    const userName = e.target.name.value;
    const url = e.target.url.value;

    updateUserInfo(userName,url)


    navigate("/update")

  };

  return (
    <div className="flex common-shadow rounded-lg justify-center items-center w-fit mx-auto p-10 my-20">
      <form onSubmit={handleUpdate} className="">
        <label className="input validator">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </g>
          <input
            type="text"
            required
            placeholder="Username"
            pattern="[A-Za-z][A-Za-z0-9\-]*"
            minlength="3"
            name="name"
            maxlength="30"
            title="Only letters, numbers or dash"
          />
        </label>
        <p className="validator-hint my-2">
          Must be 3 to 30 characters
          <br />
          containing only letters, numbers or dash
        </p>
        <label className="input validator">
          <svg
            className="h-[1em] opacity-50"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <g
              strokeLinejoin="round"
              strokeLinecap="round"
              strokeWidth="2.5"
              fill="none"
              stroke="currentColor"
            >
              <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
              <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
            </g>
          </svg>
          <input
            type="url"
            required
            placeholder="https://"
            name="url"
            pattern="^(https?://)?([a-zA-Z0-9]([a-zA-Z0-9\-].*[a-zA-Z0-9])?\.)+[a-zA-Z].*$"
            title="Must be valid URL"
          />
        </label>
        <p className="validator-hint">Must be valid URL</p>
        <div className="text-right">
          <button className="btn btn-neutral mt-4">Update</button>
        </div>
      </form>
    </div>
  );
};

export default UpdateProfile;
