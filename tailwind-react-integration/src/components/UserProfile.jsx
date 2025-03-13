function UserProfile() {
  return (
    <div className="user-profile hover:shadow-xl bg-gray-100 sm:p-4 sm:max-w-xs md:p-8 shadow-lg md:max-w-sm mx-auto rounded-lg my-20">
      <img
        className="rounded-full sm:w-24 sm:h-24 hover:scale-110 transition-transform duration-300 ease-in-out md:w-36 md:h-36 mx-auto "
        src="https://via.placeholder.com/150"
        alt="User"
      />
      <h1 className="md:text-xl hover:text-blue-500 sm:text-sm text-blue-800 my-4">
        John Doe
      </h1>
      <p className="text-gray-600 sm:text-base md:text-lg">
        Developer at Example Co. Loves to write code and explore new
        technologies.
      </p>
    </div>
  );
}

export default UserProfile;
