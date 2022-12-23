export class ArrayBufferConverter {
  constructor() {
    this.bufferView = null;
  }

  load(buffer) {
    this.bufferView = new Uint16Array(buffer);
  }

  toString() {
    if (!this.bufferView) {
      return '';
    }
    let result = '';
    for (let i = 0; i < this.bufferView.length; i++) {
      result += String.fromCharCode(this.bufferView[i]);
    }
    return result;
  }
}
