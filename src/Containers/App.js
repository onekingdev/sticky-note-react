import React,{useState} from "react";
import Note from "../Components/Note/Note";
import "./App.css";
import Auxilary from "../hoc/Auxilary";
import Headerbar from "../Components/Header/Headerbar";
import CreateNote from "../Components/CreateNote/CreateNote";
import ListNote from "../Components/ListNote/ListNote";
import StarredNote from "../Components/StarredNote/StarredNote";
import { colors } from "../Components/Note/Color";
import Draggable from "react-draggable";

function App() {
  const [noteList, setNoteList] = useState([]);
  const [starFlag, setStarFlag] = useState(false);

  const createNote = () => {
    if(starFlag){
      alert("You can't create new note on starred mode.");
      return;
    }
    let date = new Date();
    setNoteList([
      ...noteList, 
      {
        id: noteList.length += 1,
        content: "",
        date: date.toLocaleDateString(),
        color: colors[Math.floor(Math.random() * colors.length)].color,
        starred: false
      }
    ]);
  };

  const deleteNote=(index)=>{
    let oldCount=[...noteList];
    oldCount.splice(index,1);
    setNoteList(oldCount);
  };

  const editNote=(index, e)=>{
    let oldCount=[...noteList];
    oldCount[index].content = e.target.innerHTML;
    setNoteList(oldCount);
  };

  const starChange=(index)=>{
    let oldCount=[...noteList];
    oldCount[index].starred = !oldCount[index].starred;
    setNoteList(oldCount);
  }

  const colorChange=(index, ele)=>{
    let oldCount=[...noteList];
    oldCount[index].color = ele.item.color;
    setNoteList(oldCount);
  }

  return (
    <Auxilary>
      <div className="App">
        <Headerbar >
          {<>
            <CreateNote clicked={createNote}></CreateNote>
            <StarredNote clicked={()=>{setStarFlag(true)}}/>
            <ListNote clicked={()=>{setStarFlag(false)}}/>
          </>}
        </Headerbar>
        <div className="container">
          <div className="Note">
            {noteList.map((elem,index) => {
              if(starFlag){
                if(elem.starred)
                  return (
                    // <Draggable
                    //   axis="both"
                    //   key={elem.id} 
                    //   handle=".handle"
                    //   position={null}
                    //   grid={[1, 1]}
                    //   scale={1}>
                    //   <div className="handle">
                    //     <Note className="handle" key={elem.id} data={elem} starChange={()=>starChange(index)} colorChange={(ele)=>colorChange(index, ele)} edit={(e)=>editNote(index, e)} delete={()=>deleteNote(index)} />
                    //   </div>
                    // </Draggable>
                    <Note 
                      key={elem.id} 
                      data={elem} 
                      starChange={()=>starChange(index)}
                      colorChange={(ele)=>colorChange(index, ele)}
                      edit={(e)=>editNote(index, e)} 
                      delete={()=>deleteNote(index)} />
                  );
              }else{
                return (
                  // <Draggable
                  //   key={elem.id} 
                  //   axis="both"
                  //   handle=".handle"
                  //   position={null}
                  //   grid={[1, 1]}
                  //   scale={1}>
                  //   <div className="handle">
                  //     <Note data={elem} starChange={()=>starChange(index)} colorChange={(ele)=>colorChange(index, ele)} edit={(e)=>editNote(index, e)} delete={()=>deleteNote(index)} />
                  //   </div>
                  // </Draggable>
                  <Note 
                      key={elem.id} 
                      data={elem} 
                      starChange={()=>starChange(index)}
                      colorChange={(ele)=>colorChange(index, ele)}
                      edit={(e)=>editNote(index, e)} 
                      delete={()=>deleteNote(index)} />
                ); 
              }
            })}
          </div>
        </div>
      </div>
    </Auxilary>
  );
}

export default App;
