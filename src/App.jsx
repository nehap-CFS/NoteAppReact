import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import CreateArea from './CreateArea.jsx'
import Note from './Note.jsx'

function App() {
  const [count, setCount] = useState(0);
 const[val,setVal]=useState([]);
  function handleClick(){
    setCount(count+1);
  }
  function noteAdd(inputdata){
      setVal((prev)=>{
        return [...prev,{...inputdata,id:Date.now()}];
      })
  }

  function delNote(id){
     setVal((prev)=>{
      return prev.filter((note)=> note.id!==id);
     })
  }

  return (
    <div>
    {/* <p>{count}</p>
      <button onClick={handleClick}>Click me</button> */}

      <h2>Note App:</h2>
      <CreateArea addnote={noteAdd}/>

      {val.map((data)=>{
          const{title,content,id}=data;
          return <Note key={id} id={id} title={title} content={content} onDel={delNote}/>
      })}
    </div>
  )
}

export default App
