import React from "react";
import folder from './configuration/Folder.js'
import Root from "./component/Root.js";

const App = () => {
    return (
        <>
            <Root trees={folder} />
        </>
    )
}

export default App