import React, { useState } from 'react'

const Root = ({ trees }) => {
    // const [expand, setExpand] = useState(false);
    // const hasChild = trees.hasChild ? true : false
    return (
        <div>
            {trees.name}
            <div>
                <Tree data={trees.items}/>
            </div>
        </div>

    );
}

const Tree = ({ data = [] }) => {
  return (
    <div className="d-tree">
      <ul className="d-flex d-tree-container flex-column">
        {data.map((tree) => (
          <TreeNode key={tree.key+tree.name} node={tree} />
        ))}
      </ul>
    </div>
  );
};

const TreeNode = ({ node }) => {
  const [childVisible, setChildVisiblity] = useState(false);

  const hasChild = node.items ? true : false;

  return (
    <li className="d-tree-node border-0">
      <div className="d-flex" onClick={(e) => setChildVisiblity((v) => !v)}>
        {hasChild && (
          <div
            className={`d-inline d-tree-toggler ${
              childVisible ? "active" : ""
            }`}
          >
          </div>
        )}

        <div className="col d-tree-head">
          {node.name}
        </div>
      </div>

      {hasChild && childVisible && (
        <div className="d-tree-content">
          <ul className="d-flex d-tree-container flex-column">
            <Tree key={node.key+node.name} data={node.items} />
          </ul>
        </div>
      )}
    </li>
  );
};

export default Root