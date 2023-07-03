import { Database } from "@/lib/database.types";
import { useSupabaseClient, useUser } from "@supabase/auth-helpers-react";
import { SupabaseClient, User } from "@supabase/supabase-js";
import { useCallback } from "react";

export function useSupabaseFunctions() {
  const supabase: SupabaseClient<Database> = useSupabaseClient();
  const user: User | null = useUser();

  const insertLead = useCallback(
    (values: Database["public"]["Tables"]["lead"]["Insert"]) =>
      supabase.from("lead").insert({
        assistant_id: user?.id,
        firstname: values.firstname,
        lastname: values.lastname,
        email: values.email,
        phone: values.phone,
        ref_no: values.ref_no,
        area_of_law: values.area_of_law,
        intake_form: values.intake_form,
        deadline: values.deadline,
        notes: values.notes,
        action: values.action,
      }),
    [supabase, user?.id]
  );

  const getLeads = useCallback(
    () => supabase.from("lead").select("*").eq("assistant_id", user?.id),
    [supabase, user?.id]
  );

  const getLeadById = useCallback(
    (id: string) =>
      supabase
        .from("lead")
        .select("*")
        .eq("id", id)
        .eq("assistant_id", user?.id)
        .single(),
    [supabase, user?.id]
  );

  const insertClient = useCallback(
    (values: Database["public"]["Tables"]["client"]["Insert"]) =>
      supabase.from("client").insert({ ...values, assistant_id: user?.id }),
    [supabase, user?.id]
  );

  const getClients = useCallback(
    () =>
      supabase
        .from("client")
        .select("id, lawyer:lawyer(*), lead:lead(*)")
        .eq("assistant_id", user?.id),
    [supabase, user?.id]
  );

  const getClientById = useCallback(
    (id: string) =>
      supabase
        .from("client")
        .select("id, lawyer:lawyer(*), lead:lead(*)")
        .eq("id", id)
        .eq("assistant_id", user?.id)
        .single(),
    [supabase, user?.id]
  );

  const getLawyers = useCallback(
    () => supabase.from("lawyer").select("id, firstname, lastname"),
    [supabase]
  );

  return {
    insertLead,
    getLeads,
    getLeadById,
    insertClient,
    getClients,
    getClientById,
    getLawyers,
  };
}
