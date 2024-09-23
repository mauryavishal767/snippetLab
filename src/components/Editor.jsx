import { useState } from "react";
import "codemirror/lib/codemirror.css";
import "codemirror/theme/material.css";
import "codemirror/mode/xml/xml"
import "codemirror/mode/javascript/javascript"
import "codemirror/mode/css/css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCompressAlt, faExpandAlt } from "@fortawesome/free-solid-svg-icons";

import { Controlled as  ControlledEditor } from "react-codemirror2";


function Editor(props) {
  const {displayName, language, value, onChange} = props
  const changeHandler = (editor, data, value)=>{
    onChange(value)
  }

  const [open, setOpen] = useState(true)

  return (
    <div id="editor-container" className={`rounded-md overflow-hidden ${open? "flex-grow" : "flex-grow-0 collapsed"}`}>
      <div id="editor-header" className= "flex-none flex justify-between bg-neutral-800 p-1 w-full">
        <div className="m-1 px-1 text-white font-bold">{displayName}</div>
        <button 
        type="button"
        className={`m-1 px-1 bg-zinc-100 rounded hover:bg-zinc-400`}
        onClick={()=>{setOpen(prev => !prev)}}
        >
          <FontAwesomeIcon icon={open? faCompressAlt : faExpandAlt}/>
        </button>
      </div>
        <ControlledEditor
          onBeforeChange={changeHandler}
          value={value}
          className= "h-full w-full"
          options={{
            lineWrapping : true,
            lint : true,
            mode : language,
            theme : 'material',
            lineNumbers : true,
            scrollbarStyle: "native"
          }}
          />
    </div>
  )
}

export default Editor