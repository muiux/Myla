import { Database } from "@/lib/database.types";
import { useSupabaseClient } from "@supabase/auth-helpers-react";
import { AuthError } from "@supabase/supabase-js";
import { Button, Label, TextInput, Alert } from "flowbite-react";
import { useRouter } from "next/router";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<AuthError | null>(null);

  const router = useRouter();
  const supabase = useSupabaseClient<Database>();

  const handleSignUp = async () => {
    await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${location.origin}/auth/callback`,
      },
    });
    router.reload();
  };

  const handleSignIn = async () => {
    const resp = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (!resp.error) {
      router.push((router.query.redirect as string) || "/");
    }

    setError(resp.error);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    router.reload();
  };

  return (
    <div className="h-screen flex max-w-lg m-auto px-10 pb-40">
      <form
        onSubmit={handleSignIn}
        className="m-auto flex flex-col gap-8 w-full"
      >
        <h1 className="text-3xl font-bold">Myla Login</h1>
        {error && (
          <div>
            <Alert color="failure">
              Error logging in: {JSON.stringify(error)}
            </Alert>{" "}
          </div>
        )}
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Email" />
          </div>
          <TextInput
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            id="email"
            placeholder="example@email.com"
            required
            type="email"
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Password" />
          </div>
          <TextInput
            id="password"
            required
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <Button type="submit">Log in</Button>
      </form>
    </div>
  );
}
