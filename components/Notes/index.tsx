import { NoteType } from "@/app/page";

type Props={
    notes:NoteType[]
    setNotes:React.Dispatch<React.SetStateAction<NoteType[]>>
}
const Notes=({notes,setNotes}:Props)=>{
return (
    <div>
        {notes.map(note=>(
            <div key={note.id}>
                <p>{note.text}</p>
                <button onClick={()=>{
                    setNotes(prev=>prev.filter(n=>n.id!==note.id))
                }}>Delete</button>
            </div>
        ))}
    </div>
)
}

export default Notes;