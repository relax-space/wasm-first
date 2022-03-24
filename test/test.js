import fs from 'fs'
var wasm_data = fs.readFileSync("../1.wasm")
var buffer = new Uint8Array(wasm_data);

var module= new WebAssembly.Instance(new WebAssembly.Module(buffer), {});

console.log(module.exports.add(1,2))