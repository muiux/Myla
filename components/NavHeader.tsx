import { Avatar, Dropdown, Navbar } from "flowbite-react";
import Image from "next/image";
import { FC } from "react";
import { useSidebarContext } from "../contexts/SidebarContext";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/router";

const NavHeader: FC<Record<string, never>> = function () {
  const { isOpenOnSmallScreens, isPageWithSidebar, setOpenOnSmallScreens } =
    useSidebarContext();
  const supabase = useSupabaseClient();
  const router = useRouter();

  const handleLogout = async () => {
    const { error } = await supabase.auth.signOut();
    if (!error) {
      router.push("/");
    }
  };

  return (
    <header className="sticky top-0 z-20 shadow-sm">
      <Navbar fluid>
        {isPageWithSidebar && (
          <button
            aria-controls="sidebar"
            aria-expanded="true"
            className="mr-2 cursor-pointer rounded p-2 text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:bg-gray-100 focus:ring-2 focus:ring-gray-100 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:bg-gray-700 dark:focus:ring-gray-700 lg:hidden"
            onClick={() => setOpenOnSmallScreens(!isOpenOnSmallScreens)}
          >
            {isOpenOnSmallScreens ? (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                  clipRule="evenodd"
                ></path>
              </svg>
            ) : (
              <svg
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clipRule="evenodd"
                ></path>
              </svg>
            )}
          </button>
        )}
        <Navbar.Brand href="/">
          <Image alt="Flowbite logo" width="150" height="50" src="/logo.jpg" />
        </Navbar.Brand>
        <div className="flex md:order-2">
          <Dropdown
            inline
            arrowIcon={false}
            label={
              <Avatar
                alt="User settings"
                img="https://flowbite.com/docs/images/people/profile-picture-5.jpg"
                rounded
              />
            }
          >
            <Dropdown.Header>
              <span className="block text-sm">Account Name</span>
            </Dropdown.Header>
            <Dropdown.Item>Profile</Dropdown.Item>
            <Dropdown.Item>Switch Account</Dropdown.Item>
            <Dropdown.Item onClick={handleLogout}>Log out</Dropdown.Item>
            <Dropdown.Item>Manage Linked Accounts</Dropdown.Item>
          </Dropdown>
          <Navbar.Toggle />
        </div>
        <Navbar.Collapse>
          <Navbar.Link href="#">Help</Navbar.Link>
          <Navbar.Link href="#">Settings</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
    </header>
  );
};

export default NavHeader;
