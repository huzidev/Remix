import { Notes } from "~/data/types";

export default function ShowNotes({ notes }: any) {
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
