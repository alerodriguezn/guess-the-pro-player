import { createClient } from "@supabase/supabase-js";
import { getSession } from "./session.server";

const supabaseUrl = process.env.SUPABASE_URL;
const supabaseKey = process.env.SUPABASE_ANON_KEY;

export const supabaseClient = createClient(supabaseUrl, supabaseKey);

export const hasAuthSession = async (request) => {
  let session = await getSession(request.headers.get("Cookie"));
  if (!session.has("access_token")) throw Error("No session");
  supabaseClient.auth.setAuth(session.get("access_token"));
};
