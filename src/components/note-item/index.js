import uuid from 'uuid';

class Note (){
  constructor(opts){
    this.id = new uuid();
    this.editing = opts.editing || false;
    this.completed = opts.completed || false;
    this.content = opts.content;
  }
}

export default Note;
