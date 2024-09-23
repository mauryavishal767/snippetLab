import { useEffect, useState } from "react";
import Editor from "./components/Editor"
import useLocalStorage from "./hooks/useLocalStorage";

function App() {
const initialHTML = 
`<!DOCTYPE html>
<html lang="en">
<head>
    <title>Document</title>
</head>
<body>
    
</body>
</html>`

const initialCSS = 
`*{
  margin: 0;
  padding: 0;
}`
  
const initialJS = `console.log("hello")`

const [html, setHtml] = useLocalStorage('html', initialHTML)
const [css, setCss] = useLocalStorage('css', initialCSS)
const [js, setJs] = useLocalStorage('js', initialJS)

const [HTML, setHTML] = useState(false)

const initialSrcDoc = 
`<html>
  <body>${html}</body>
  <style>${css}</style>
  <script>${js}</script>
</html>`
const [srcDoc, setSrcDoc] = useState(initialSrcDoc)

useEffect(() => {
  console.clear();
  setSrcDoc(initialSrcDoc)
}, [html,css,js])


  return (
    <>
      <div className="pane top-pane p-1 flex justify-between space-x-3 bg-zinc-700 h-[35%]">
        <Editor 
          language = "xml" 
          displayName = "HTML" 
          value={html} 
          onChange={setHtml}
          HTML={HTML}
          setHTML={setHTML}
        />  
        <Editor 
          language = "css" 
          displayName = "CSS" 
          value={css} 
          onChange={setCss}
        />
        <Editor 
          language = "javascript" 
          displayName = "JS" 
          value={js} 
          onChange={setJs}
        />
      </div>
      <div className="bottom-pane h-[65%]">
        <iframe
          srcDoc={srcDoc}
          className="w-full h-full"
          /*Title option*/
          /*sandbox option*/
          /*frameBorder option*/
          /*width-height option*/
          /*Title option*/
        ></iframe>
      </div>
    </>
  )
}

export default App
