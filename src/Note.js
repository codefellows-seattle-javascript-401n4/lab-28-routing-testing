import uuid from 'uuid';

function Note(_content) {
    this.content = _content;
    return {
        content: this.content,
        id: uuid(),
        completed: false,
        completed: false
    }
}
module.exports = Note;