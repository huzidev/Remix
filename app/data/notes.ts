import fs from 'fs/promises';
import { Notes } from './types';

// create notes.json file at ROOT level beside package.json file
export async function getStoredNotes(id?: number) {
    const rawFile = await fs.readFile('notes.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFile);
    const response = (id ? data.notes.find((val: Notes) => val.id) : data.notes) ?? [];
    return response;
}

export function storeNotes(notes: Notes) {
    console.log("Received Notes", notes);
    return fs.writeFile('notes.json', JSON.stringify({ notes: notes || [] }));
}