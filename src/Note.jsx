export default function Note({title,content,id,onDel}){

function handleDel(){
    onDel(id);
}
    return(
        <div className="wrapper-div">
            <p>{title}</p>
            <p>{content}</p>
            <button onClick={handleDel} className="del-btn">DEL NOTE</button>
        </div>
    )

}