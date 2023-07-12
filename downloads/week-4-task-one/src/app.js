import FileTree from './fileTree';

export function createFileTree(input) {
  trasverseTree()
  const fileTree = new FileTree();

  for (const inputNode of input) {
    const parentNode = inputNode.parentId
      ? fileTree.findNodeById(inputNode.parentId)
      : null;

    fileTree.createNode(
      inputNode.id,
      inputNode.name,
      inputNode.type,
      parentNode
    );
  }

  return fileTree;

  function trasverseTree() {
    let depth = 0, nodeCount = 0;
    const treeLevel = {};
    const rootNodes = input.filter(i => i.parentId === nodeCount.id);
    treeLevel[depth] = rootNodes;
    nodeCount += treeLevel[depth].length;

    while (nodeCount < input.length) {
      depth++;
      treeLevel[depth] = [];
      for (const node of treeLevel[depth - 1]) {
        const children = input.filter(i => i.parentId === node.id);
        treeLevel[depth].push(...children);
      }
      nodeCount += treeLevel[depth].length;
    }

    input = [];
    for (let i = 0; i <= depth; i++) {
      input.push(...treeLevel[i]);
    }
  }
}