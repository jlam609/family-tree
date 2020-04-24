class FamilyTree {
  constructor (value) {
    if (value === undefined || typeof value !== 'string') throw(error)
    this.value = value;
    this.children = [];
  }
  insert(x){
    const children = new FamilyTree(x);
    this.children.push(children);
  }
  familySize(){
    return (this.children.length + 1)
  }
  findMember(name){
    if (name === this.value) return this;
    else {
      return this.children.find(elem => elem.value === name)
   }
  }
  log(){
    let arr = []
    if (this.value !== undefined) arr.push(`-- ${this.value}`)
    if (this.children){
      for (let i = 0; i < this.children.length; i++){
        let curChild = this.children[i]
        arr.push(`---- ${curChild.value}`)
        if (curChild.children.length > 0) {
          for (let j = 0; j < curChild.children.length; j++) {
          arr.push(`------ ${curChild.children[j].value}`)
          }
        }
    }
  }
    return arr.join('\n');
}
}
module.exports = FamilyTree;
