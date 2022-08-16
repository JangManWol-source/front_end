import React from "react";
import menus from "./Menus/Menus";
import { Link } from "react-scroll";
import { useDispatch } from "react-redux";
import { toggleDrawer } from "../../features/toggle";
const DropDown = (props) => {
  const dispatch = useDispatch();
  return (
    <div className="absolute bg-dark-late-gray text-salmon w-full text-default p-4 flex justify-end text-end">
      <div>
        {menus.map((menu) => (
          <Link
            duration={100}
            smooth
            onClick={() => {
              dispatch(toggleDrawer());
            }}
            key={menu.id}
            to={menu.menu}
            className={`pl-2 flex hover:text-black/90 flex-col p-1 ${
              menu.isButton
                ? "bg-salmon ml-2 p-1 rounded-sm text-center"
                : "bg-transparent"
            } text-white text-xs`}
          >
            {menu.menu}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default DropDown;
