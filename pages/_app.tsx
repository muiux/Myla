import FlowbiteContext from "@/contexts/FlowbiteContext";
import { SidebarProvider } from "@/contexts/SidebarContext";
import { Database } from "@/lib/database.types";
import { createPagesBrowserClient } from "@supabase/auth-helpers-nextjs";
import { Session, SessionContextProvider } from "@supabase/auth-helpers-react";
import { AppProps } from "next/app";
import { useState } from "react";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps,
}: AppProps<{
  initialSession: Session;
}>) {
  const [supabase] = useState(() => createPagesBrowserClient<Database>());

  return (
    <SessionContextProvider
      supabaseClient={supabase}
      initialSession={pageProps.initialSession}
    >
      <FlowbiteContext>
        <SidebarProvider>
          <Component {...pageProps} />
        </SidebarProvider>
      </FlowbiteContext>
    </SessionContextProvider>
  );
}
