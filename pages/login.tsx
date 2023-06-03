import { Auth } from "@supabase/auth-ui-react";
import { ThemeSupa } from "@supabase/auth-ui-shared";
import { useSession, useSupabaseClient } from "@supabase/auth-helpers-react";
import { useRouter } from "next/navigation";
import { GetServerSideProps, InferGetServerSidePropsType } from "next";

export const getServerSideProps: GetServerSideProps<{
  redirect_url: string;
}> = async (context) => {
  const redirect_url =
    (context.query.redirect as string | undefined) ?? "/dash";

  return {
    props: {
      redirect_url,
    },
  };
};

export default function Login({
  redirect_url,
}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  const session = useSession();
  const supabase = useSupabaseClient();
  const router = useRouter();

  if (session) {
    router.push(redirect_url);
  }

  return (
    <div className="max-w-lg m-auto flex flex-col p-8">
      <h1 className="text-2xl font-bold text-center">Myla Login</h1>
      <Auth
        supabaseClient={supabase}
        providers={[]}
        appearance={{
          theme: ThemeSupa,
          variables: {
            default: {
              colors: {
                brand: "blue",
                brandAccent: "darkblue",
              },
            },
          },
        }}
      />
    </div>
  );
}
