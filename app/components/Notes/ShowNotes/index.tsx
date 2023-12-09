import { useLoaderData } from "@remix-run/react";
import { Notes } from "~/data/types";

export default function ShowNotes() {
    // useLoaderData will return the data from the loader function since this showNotes component is called in notes page where loader function is created
    // therefore we can use this useLoaderData here
  const notes: any = useLoaderData();
  return (
    <ul id="note-list">
      {notes.map((note: Notes, index: number) => (
        <li key={note.id} className="note">
          <article>
            <header>
              <ul className="note-meta">
                <li>#{index + 1}</li>
              </ul>
              <h2>{note.title}</h2>
            </header>
            <p>{note.content}</p>
          </article>
        </li>
      ))}
    </ul>
  );
}
