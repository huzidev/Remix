import { redirect, type ActionFunctionArgs } from "@remix-run/node";
import NewNote from "~/components/Notes";
import { getStoredNotes, storeNotes } from "~/data/notes";
import * as endpoints from '~/endpoints/index';

export default function NotesPage() {
  return (
    <div>
      <NewNote />
    </div>
  );
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
    const noteData: any = Object.entries(formData);
    // now we can access users's input like noteData.title OR noteData.content

    // validation
    const existingNote = await getStoredNotes();
    noteData.id = Date.now();
    const updateNotes = existingNote.concat(noteData);
    await storeNotes(updateNotes);
    return redirect(endpoints.NOTES);
}
