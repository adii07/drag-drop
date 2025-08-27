type props={
    key:number;
    content:string;
}
const Note=({content}:props)=>{

    return (
        <div 
        style={{position:'absolute',
            top:0,
            left:0,
            border:'1px solid black',
            userSelect:'none',
            width:'200px',
            padding:'8px',
            cursor:'move',
            backgroundColor:'lightgray'
        }}>
            <p>📌{content}</p>
        </div>
    )
}

export default Note;