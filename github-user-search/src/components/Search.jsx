import { useState } from "react";
import { fetchUserData } from "../services/githubService";
export default function Search() {
  const [title, setTitle] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [userData, setUserData] = useState({});

  const handleSubmit = async (event) => {
    setLoading(true);
    try {
      event.preventDefault();
      if (title.trim() === "") {
        alert("Please enter a username");
        setLoading(false);
        return;
      }
      const data = await fetchUserData(title);
      setUserData(data);
      setTitle("");
      setLoading(false);
    } catch (error) {
      setError("Error:", error);
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen ">
      <form onSubmit={handleSubmit}>
        <label htmlFor="">Enter Your Github username:</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="border border-blue p-2 my-4 block w-2/3 mx-auto "
          placeholder="search your Github Username"
        />
      </form>
      <div className="">{loading && <p>Loading...</p>}</div>
      <div className="">
        {!userData && error && <p>Looks like we cant find the user,</p>}
      </div>
      {userData && (
        <div className="rounded-2xl w-fit mt-10 shadow-md p-4 bg-white w-2/3 mx-auto my-4">
          <img
            className="mx-auto mb-4 size-[10rem] "
            src={userData?.avatar_url}
            alt={userData.name}
          />
          <h2 className="text-2xl">{userData?.name}</h2>
        </div>
      )}
    </div>
  );
}
