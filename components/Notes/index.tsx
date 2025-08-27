import { NoteType } from "@/app/page";
import Note from "../Note";
import { useEffect } from "react";

type Props = {
    notes: NoteType[]
    setNotes: React.Dispatch<React.SetStateAction<NoteType[]>>
}
const Notes = ({ notes, setNotes }: Props) => {
    useEffect(() => {
        // localstorage logic
        const savedNotes = JSON.parse(localStorage.getItem("notes")||"[]");

        const updatedNotes = notes.map((note) => {
            const savedNote = savedNotes.find((n:any) => n.id === note.id);
            if (savedNote) {
                return { ...note, position: savedNote.position };
            } else {
                const position = determineNewPosition();
                return { ...note, position };
            }
        });

        setNotes(updatedNotes);
        localStorage.setItem("notes", JSON.stringify(updatedNotes));
    }, [notes.length]);

    const determineNewPosition = () => {
        const maxX = window.innerWidth - 250;
        const maxY = window.innerHeight - 250;

        return {
            x: Math.floor(Math.random() * maxX),
            y: Math.floor(Math.random() * maxY),
        };
    };

    return (
        <div>
            {notes.map(note => (
                <Note 
                    key={note.id}
                    content={note.text}
                />
            ))}
        </div>
    )
}

export default Notes;