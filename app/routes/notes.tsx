import NewNote from "~/components/Notes";

export default function NotesPage() {
  return (
    <div>
      <NewNote />
    </div>
  );
}


// just like links() function for CSS this remix will looks for this aciton function and this action function will runs for backend code
// and action function will ONLY runs for a NON-GET request means (post, put or delete). Action function will NOT runs for GET method
export function action() {
    
}
