let furniture = new Map([
  ["plate","porcelain"],
  ["jug", "glass"],
  ["mug","metal"]
])
for (let name of furniture.keys()){
console.log(name);
}
for (let material of furniture.values()) {
  console.log(material)
}
for (let elem of furniture) {

  console.log(elem)
}