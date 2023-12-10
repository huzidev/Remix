import { useLoaderData } from "@remix-run/react";
import { getStoredNotes } from "~/data/notes";
import { Notes } from "~/data/types";

export default function NotePage() {
  const data: Notes = useLoaderData();

  return (
    <div>
      <p>{data.id}</p>
      <h1>{data.title}</h1>
      <p>{data.content}</p>
    </div>
  );
}

export async function loader(id: number) {
  const note = await getStoredNotes(id);
  return note;
}