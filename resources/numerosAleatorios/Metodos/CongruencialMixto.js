class CongruencialMixto {
  /**
   *
   * @param {Number[]} _arrParams
   */
  constructor(_arrParams) {
    this.a = parseFloat(_arrParams[1]);
    this.c = parseFloat(_arrParams[2]);
    this.modulo = parseFloat(_arrParams[3]);
    this.x = [parseFloat(_arrParams[0])];
    this.r = [];
  }

  getX0() {
    return this.x[0];
  }

  /**
   *
   * @param {Number} _x0
   */
  setX0(_x0) {
    this.x[0] = _x0;
  }

  getA() {
    return this.a;
  }

  /**
   *
   * @param {Number} _a
   */
  setA(_a) {
    this.a = _a;
  }

  getC() {
    return this.c;
  }

  /**
   *
   * @param {Number} _c
   */
  setC(_c) {
    this.c = _c;
  }

  getModulo() {
    return this.modulo;
  }

  /**
   *
   * @param {Number} _modulo
   */
  setModulo(_modulo) {
    this.modulo = _modulo;
  }

  /**
   *
   * @returns Number
   */
  next() {
    let x_i = this.x[this.x.length - 1] * this.a + this.c;
    this.x.push(x_i % this.modulo);
    this.r.push(
      parseFloat((this.x[this.x.length - 1] / this.modulo).toFixed(8))
    );
    return this.r[this.r.length - 1];
  }

  generarNumerosAleatorios() {
    let x_i = 0;
    this.r = [];

    for (let i = 1; i < this.modulo; i++) {
      x_i = this.x[i - 1] * this.a + this.c;
      this.x.push(x_i % this.modulo);
      this.r.push(parseFloat((this.x[i] / this.modulo).toFixed(8)));
    }

    return this.r;
  }
}

export { CongruencialMixto };
