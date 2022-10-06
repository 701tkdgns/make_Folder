import React, { useState } from 'react'

const Tree = ({ trees }) => {
    const [childVisible, setChildVisiblity] = useState(false);
    const hasChild = trees.childNode ? true : false;
    return (
        <div style={{ display: "block", cursor:"pointer" , color: "#fff", "paddingLeft": "5px" }}>
            <div onClick={(e) => setChildVisiblity((v) => !v)}>
                {trees.commandPartName}
            </div>
            <ul>
                {hasChild && childVisible && (
                    <div  style={{ display: "block", "paddingLeft": "5px" }}>
                        {trees.childNode.map((tree) => (
                            <TreeNode key={tree.commandFullName} node={tree} />
                        ))}
                    </div>
                )}

            </ul>
        </div>
    )
};

const TreeNode = ({ node = [] }) => {
    const [childVisible, setChildVisiblity] = useState(false);
    const hasChild = node.childNode.length > 0 ? true : false;

    const checknode = () => {
        setChildVisiblity((v) => !v)

        if (!hasChild) {
            const commandText = document.querySelector(".command__text");
            
            if (commandText.value === "" ){
                commandText.value = node.commandFullName
            } else{
                commandText.value += " " + node.commandPartName
            }

        }
    }

    return (
        <li style={{ display: "block", "paddingLeft": "5px", cursor:"pointer" }}>
            <div onClick={checknode}>
                {node.commandPartName}  
            </div>

            <div style={{ display: "block", "paddingLeft": "5px" }}>
                {hasChild && childVisible && (
                    <ul>
                        {
                            node.childNode.map((tree) => (
                                <Tree key={tree.commandFullName} trees={tree} />
                            ))
                        }
                    </ul>

                )}

            </div>
        </li>
    )
}


export default Tree