import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import { Link, useRouteError } from "@remix-run/react";
import NewNote from "~/components/Notes/AddNotes";
import ShowNotes from "~/components/Notes/ShowNotes";
import { getStoredNotes, storeNotes } from "~/data/notes";
import * as endpoints from "~/endpoints/index";

export default function NotesPage() {
  return (
    <div>
      <NewNote />
      <ShowNotes />
    </div>
  );
}

// loader is used to get data from database to show it on ours front-end page
export async function loader() {
  const notes = await getStoredNotes(); 
  return notes;
  // OR
  // return json(notes); BUT import json from "@remix-run/node";
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
  if (noteData.title.trim().length <= 5) {
    return {
      message: "Invalid title - Title length must be greater than 5 characters",
    };
  }
  // now we can access users's input like noteData.title OR noteData.content
  // validation
  const existingNotes = await getStoredNotes(); 
  noteData.id = Date.now();
  const updateNotes = existingNotes.concat(noteData);
  await storeNotes(updateNotes);
  return redirect(endpoints.NOTES);
}

export function ErrorBoundary() {
  const error: any = useRouteError();
  return (
    <>
      <h1>An Error Occured - Related to notes</h1>
      <p>{error?.message}</p>
      <p>Go back to <Link to={endpoints.HOME}>Home Page</Link></p>
    </>
  );
}
