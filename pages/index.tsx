import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { Database } from "@/lib/database.types";
import { useRouter } from "next/router";
import Layout from "@/components/Layout";
import { useEffect } from "react";
import NavHeader from "@/components/NavHeader";

export default function Home() {
  const session = useSession();
  const router = useRouter();

  useEffect(() => {
    if (!session) {
      router.push("/login?redirect=" + router.route);
    }
  }, [session]);

  return (
    <Layout>
      <h1>Hello, world</h1>
    </Layout>
  );
}
