import { whitelist as addresses } from "./data/whitelist";
import { createJson, createTree, getLeaf, getProof, getRoot } from "./utils";

const tree = createTree(addresses);
const root = getRoot(tree);
const leaf = getLeaf(addresses[2]);
const proof = getProof(tree, leaf);

console.log("addresses:", addresses);
console.log("root: ", root);
console.log("leaf: ", leaf);
console.log("proof: ", proof);
console.log(tree.verify(proof, leaf, root));
createJson({ root, leaf, proof });
