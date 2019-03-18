function BSTnode(val, left, right) {
  this.val = val;
  this.left = left;
  this.right = right;
  this.isLeaf = function () {
    return this.left == null && this.right == null;
  };
  this.search = function (key) {
    return searchR(this, key);
  }

  function searchR(tree, key)
  {
    if (tree == null) {
      return null;
    }
    if (key == tree.val) {
      return tree;
    }
    else if (key < tree.val) {
      return searchR(tree.left, key);
    }
    else {
      return searchR(tree.right, key);
    }
  }
  /*
  this.insert = function (key)
  {
    if (this == null) {
      return new BSTnode(key, null, null);
    }
    if (key < this.val) {
      this.left = insert(this.left, key);
      return this;
    }
    else {
      this.right = insert(this.right, key);
      return this;
    }
  }
  */
}

var tree = new BSTnode(5,
                       new BSTnode(3, null, null),
                       new BSTnode(8,
                                new BSTnode(6, null, null),
                                new BSTnode(9, null, null)
                               )
                      );
var target = 7;
var hit = tree.search(target);
if (hit != null) {
  console.log(hit.val);
}
else {
  console.log(target, "not found.")
}


function BSTnode1(val) {
  this.val = val;
  this.left = null;
  this.right = null;
  this.isLeaf = function () {
    return this.left == null && this.right == null;
  };
}


var node2 = new BSTnode(8, null, null);
var node1 = new BSTnode(5, null, node2);
//node1.right = node2;
console.log(node1.val, node1.left, node1.right);
console.log(node2.val, node2.left, node2.right);
console.log("node1 is " + (node1.isLeaf() ? "":"not ") + "a leaf.");
console.log("node2 is " + (node2.isLeaf() ? "":"not ") + "a leaf.");
