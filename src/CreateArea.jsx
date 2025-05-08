import { useState } from "react"

export default function CreateArea({addnote}){
  const[data,setdata]=useState({
    title:"",
    content:""
  });
    function handleChange(e){
          const{name,value}=e.target;

          setdata((prev)=>{
            return{
                ...prev,
                [name]:value,
            }
          })
    }

    function handleClick(){
        if(data.title!=="" && data.content!=""){
            addnote(data);
            setdata({
                title:"",
                content:""
            })
        }else{
            alert("plx enter data");
        }
    }
    return(
        <div>
            <input className="input-box" type="text" name="title" value={data.title} placeholder="Enter title" onChange={handleChange}></input>
            <input className="input-box" type="text" name="content" value={data.content} placeholder="Enter content" onChange={handleChange}></input>
            <button onClick={handleClick} className="add-btn">add note</button>
        
        </div>
    )
}