class CommandNode {
    commandPartName = "";
    commandFullName = "";
    childNode = [];

    constructor(partName) {
        this.commandPartName = partName;
        this.commandFullName = partName;
        this.childNode = [];
    }

    AddCommand = (node) => {
        node.commandFullName = this.commandFullName +  " " + node.commandFullName;
        this.childNode.push(node);
        return this;
    }
}

const rootNode = new CommandNode("admin");
const giveNode = new CommandNode("give");
const itemNode = new CommandNode("item");
const avatarItemNode = new CommandNode("avatarItem");

rootNode.AddCommand(giveNode);
giveNode.AddCommand(itemNode);
itemNode.AddCommand(new CommandNode("--itemCode <수량>")).AddCommand(new CommandNode("--count <수량>"))
avatarItemNode.AddCommand(new CommandNode("--itemCode <수량>")).AddCommand(new CommandNode("--count <수량>"));


export default rootNode;