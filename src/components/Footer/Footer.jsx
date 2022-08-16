import menus from "../Nav/Menus/Menus";
import { Link } from "react-scroll";
const Footer = () => {
  return (
    <div className="w-full">
      <div className="flex p-4 justify-between items-center">
        <div>
          {menus.map((each) => (
            <Link
              to={each.menu}
              key={each.id}
              className={`mr-2 text-default ${
                each.menu === "LET'S WORK TOGETHER" ? "hidden" : ""
              }`}
            >
              {each.menu}
            </Link>
          ))}
        </div>
        <div className="text-default">Photos from Unsplash</div>
      </div>
    </div>
  );
};

export default Footer;
