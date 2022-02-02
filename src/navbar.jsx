
const Navbar = function () {
    return (
        <div className="navbar w-full flex justify-between items-center py-5">
        <h1 className="text-2xl font-bold text-pink-500"> Learn React</h1>
        <div>
          <ul className="inline-flex space-x-4 text-base font-medium text-gray-500"><li>Home</li>
          <li>About</li></ul>
        </div>
      </div>
    )
}

export default Navbar;


