'use client'
import Image from "next/image";
import styles from "./page.module.css";
import Notes from "../../components/Notes";
import { useState } from "react";
export type NoteType={
  text:string;
  id:number;
}
export default function Home() {
  const [notes,setNotes]=useState<NoteType[]>([
    {text:"Note 1",id:1},
    {text:"Note 2",id:2}
  ])
  return (
<>
<Notes notes={notes} setNotes={setNotes}/>
</>
  );
}
