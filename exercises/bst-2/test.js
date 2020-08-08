const Node = require('./index');
const BST = require('./index');
test('Node is a constructor', () => {
  expect(typeof Node.prototype.constructor).toEqual('function');
});
test('BST is a constructor', () => {
  expect(typeof BST.prototype.constructor).toEqual('function');
});


test('Node can insert correctly', () => {
  var tree = new BST();
  //const node = new Node(10);
  tree.insert(10);
  tree.insert(5);
  tree.insert(15);
  tree.insert(17);
  var root = tree.root;
  expect(root.left.data).toEqual(5);
  expect(root.right.data).toEqual(15);
  expect(root.right.right.data).toEqual(17);
});

test('Contains returns node with the same data', () => {
  const node = new BST();
  node.insert(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);
  node.insert(-5);
  node.insert(3);
  const root = node.root;
  const three = root.left.left.right;
  expect(node.contains(3)).toEqual(three);
});

test('Contains returns null if value not found', () => {
  const node = new BST();
  node.insert(10);
  node.insert(5);
  node.insert(15);
  node.insert(20);
  node.insert(0);are
  node.insert(-5);
  node.insert(3);

  expect(node.contains(9999)).toEqual(null);
});
