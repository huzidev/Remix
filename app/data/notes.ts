import fs from 'fs/promises';

interface Notes {
    id: number;
    title: string;
    content: string;
}

export async function getStoredNotes() {
    const rawFile = await fs.readFile('notes.json', { encoding: 'utf-8' });
    const data = JSON.parse(rawFile);
    const storedNotes = data.notes ?? [];
    return storedNotes;
}

export function storeNotes(notes: Notes) {
    return fs.writeFile('notes.json', JSON.stringify({ notes: notes || [] }));
}