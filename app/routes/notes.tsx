import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import NewNote from "~/components/Notes/AddNotes";
import ShowNotes from "~/components/Notes/ShowNotes";
import { getStoredNotes, storeNotes } from "~/data/notes";
import * as endpoints from "~/endpoints/index";

export default function NotesPage() {
  // just like useSelector hook of reduxJS
  const notes = useLoaderData();
  return (
    <div>
      <NewNote />
      <ShowNotes notes={notes}/>
    </div>
  );
}

// loader is used to get data from database to show it on ours front-end page
export async function loader() {
  const notes = await getStoredNotes();
  return notes;
  // OR
  // BUT import json from "@remix-run/node";
  // return json(notes);
  // remix will do return new Response(JSON.stringify(notes), {headers: {'Content-Type': 'application/json'}}) for us just by using return notes
}

// just like links() function for CSS this remix will looks for this aciton function and this action function will runs for backend code
// and action function will ONLY runs for a NON-GET request means (post, put or delete). Action function will NOT runs for GET method
// action function will receive data object data.request or we can simply destructure it and use { request }
export async function action({ request }: ActionFunctionArgs) {
  // will receive form submitted data from ours form
  const formData = await request.formData();
  // const noteData = {
  //     title: formData.get('title'),
  //     conent: formData.get('content')
  // }
  // OR
  const noteData: any = Object.fromEntries(formData);

  // now we can access users's input like noteData.title OR noteData.content

  // validation
  const existingNotes = await getStoredNotes();
  noteData.id = Date.now();
  const updateNotes = existingNotes.concat(noteData);
  await storeNotes(updateNotes);
  return redirect(endpoints.NOTES);
}
