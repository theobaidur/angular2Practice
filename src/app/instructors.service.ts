export class InstructorsService {

  constructor() { }
  classList:Array<any> = [];

  getList() {
    return this.classList;
  }

  addClass(classData:any){
    this.classList.push(classData);
  }

  getOne(index:number){
    return this.classList[index] || {};
  }

  removeAll(){
    this.classList = [];
  }

  removeOne(index:number){
    this.classList.splice(index,1);
  }
}
