import React from "react";
import menus from "./Menus/Menus";
import { Link } from "react-scroll";
import { Squash as Hamburger } from "hamburger-react";
import DropDown from "./DropDown";
import { useDispatch, useSelector } from "react-redux";
import { toggleDrawer } from "../../features/toggle";
const Nav = () => {
  const dispatch = useDispatch();
  const isDrawerOpen = useSelector((state) => state.toggle.drawerIsOpen);

  return (
    <React.Fragment>
      <div>
        <div className="flex justify-between items-center bg-dark-late-gray  lg:p-5 p-2 text-default">
          <div className="font-logo text-xl text-salmon">The Studio</div>
          <div className="md:flex hidden items-center">
            {menus.map((menu) => (
              <Link
                key={menu.id}
                to={menu.menu}
                className={`pl-2 ${
                  menu.isButton
                    ? "bg-salmon ml-2 p-1 rounded-sm text-center"
                    : "bg-transparent"
                } text-white text-xs`}
              >
                {menu.menu}
              </Link>
            ))}
          </div>
          <div className="flex md:hidden">
            <Hamburger
              toggled={isDrawerOpen}
              toggle={() => {
                dispatch(toggleDrawer());
              }}
              color="#fff"
            />
          </div>
        </div>
      </div>
      {isDrawerOpen ? <DropDown /> : <div></div>}
    </React.Fragment>
  );
};

export default Nav;
