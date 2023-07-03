import classNames from "classnames";
import { Sidebar as FlowbiteSidebar } from "flowbite-react";
import { useState, type FC } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { HiOutlineSearch } from "react-icons/hi";
import { BsPinFill } from "react-icons/bs";
import { FaUser } from "react-icons/fa";
import { RiPencilFill } from "react-icons/ri";

const Sidebar: FC<Record<string, never>> = function () {
  const { isOpenOnSmallScreens: isSidebarOpenOnSmallScreens } =
    useSidebarContext();
  const [isOpenOnDesktop, setIsOpenOnDesktop] = useState(false);

  return (
    <div
      className={classNames(
        "fixed top-[60px] lg:top-0 min-h-[calc(100vh-60px)] h-full z-10 lg:!block lg:sticky",
        {
          hidden: !isSidebarOpenOnSmallScreens,
        }
      )}
    >
      <FlowbiteSidebar collapsed={isOpenOnDesktop}>
        <FlowbiteSidebar.Items>
          <FlowbiteSidebar.ItemGroup>
            <FlowbiteSidebar.Item href="#" icon={HiOutlineSearch}>
              Search
            </FlowbiteSidebar.Item>
          </FlowbiteSidebar.ItemGroup>
          <FlowbiteSidebar.ItemGroup className="flex flex-col justify-center gap-4">
            <FlowbiteSidebar.Item href="/dash/my-leads" icon={BsPinFill}>
              My Leads
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item href="/dash/my-clients" icon={FaUser}>
              My Clients
            </FlowbiteSidebar.Item>
            <FlowbiteSidebar.Item
              href="/dash/my-intake-forms"
              icon={RiPencilFill}
            >
              My Intake Forms
            </FlowbiteSidebar.Item>
          </FlowbiteSidebar.ItemGroup>
        </FlowbiteSidebar.Items>
      </FlowbiteSidebar>
    </div>
  );
};

export default Sidebar;
