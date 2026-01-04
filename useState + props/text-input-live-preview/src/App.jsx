import { useState } from "react";
import TextInput from "./components/TextInput";
import TextPreview from "./components/TextPreview";

function App(){
    const [text, setText] = useState("");
    return(
        <div className="h-screen flex flex-col justify-center items-center bg-gray-100">
            <TextInput setText={setText}/>
            <TextPreview text={text}/>
        </div>
    )
}

export default App;