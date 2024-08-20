import { createClient } from "@/app/utils/supabase/server";

export async function submitAttendance(formData: FormData) {
  const supabase = createClient();

  // type-casting here for convenience
  // in practice, you should validate your inputs
  const data = {
    visitable: formData.get("visitable") as unknown as boolean,
    accommodation: formData.get("accommodation") as unknown as boolean,
    name: formData.get("name") as string,
    phone: formData.get("phone") as string,
    comment: formData.get("comment") as string,
  };
  const { error } = await supabase.from("attendances").insert(data);
  if (error) throw error;
}
