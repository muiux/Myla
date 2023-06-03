import { PropsWithChildren } from "react";
import NavHeader from "./NavHeader";

export type LayoutProps = PropsWithChildren<{}>;

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-screen-lg mx-auto px-4 sm:px-6 md:px-8">
      <NavHeader />
      {children}
    </div>
  );
}
