import { useState } from "react";

export default function Search() {
  const [title, setTitle] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    if (title.trim() === "") {
      alert("Please enter a the username");
      return;
    }

    setTitle("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="border border-white p-2 my-4 block w-full "
        placeholder="Title"
      />
    </form>
  );
}
