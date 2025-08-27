type props={
    content:string;
    initialPos:{x:number;y:number};
}
import { forwardRef } from "react";

const Note = forwardRef(({ content, initialPos, ...props }:any, ref:any) => {

    return (
        <div 
            ref={ref}
        style={{position:'absolute',
                left: `${initialPos?.x}px`,
                top: `${initialPos?.y}px`,
            border:'1px solid black',
            userSelect:'none',
            width:'200px',
            padding:'8px',
            cursor:'move',
            backgroundColor:'lightgray',
            
        }}
            {...props}>
            <p>📌{content}</p>
        </div>
    )
})

export default Note;