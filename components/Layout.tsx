import { PropsWithChildren } from "react";
import NavHeader from "./NavHeader";
import Sidebar from "./Sidebar";
import { PT_Sans } from "next/font/google";

// If loading a variable font, you don't need to specify the font weight
const PTSans = PT_Sans({ weight: "400", subsets: ["latin"] });

export type LayoutProps = PropsWithChildren<{
  sidebar?: boolean;
}>;

export default function Layout({ children, sidebar = true }: LayoutProps) {
  return (
    <div className={PTSans.className}>
      <NavHeader />
      <div className="flex dark:bg-gray-900">
        <main className={"order-2 mx-4 mt-4 flex-[1_0_16rem]"}>{children}</main>
        {sidebar && (
          <div className="order-1">
            <Sidebar />
          </div>
        )}
      </div>
    </div>
  );
}
