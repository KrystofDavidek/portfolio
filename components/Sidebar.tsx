import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { useTheme } from "next-themes";

const Sidebar = () => {
  const { theme, setTheme } = useTheme();

  const changeTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <div>
      <img src="https://picsum.photos/id/1/200/300" alt="Example img" className="w-32 h-32 mx-auto rounded-full" />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Kryštof </span>
        Davídek
      </h3>
      <p className="px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">Web Developer</p>
      <a href="" download="name" className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full dark:bg-dark-200">
        <GiTie className="h-6 w-9" />
        Download Resume
      </a>
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>
      <div className="py-4 my-5 bg-gray-200 dark:bg-dark-200" style={{ marginLeft: "-1rem", marginRight: "-1rem" }}>
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Brno, Czech Republic</span>
        </div>
        <p className="my-2">kry.davidek@gmail.com</p>
        <p className="my-2">734574242</p>
      </div>
      <button
        className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => {
          window.open("mailto:kry.davidek@gmail.com");
        }}
      >
        Email Me
      </button>
      <button onClick={changeTheme} className="w-8/12 px-5 py-2 my-2 rounded-full bg-gradient-to-r from-green to-blue-400">
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
