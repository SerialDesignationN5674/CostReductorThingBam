class Numb {
  constructor(m,e){ // mantissa exponent
    this.mantissa = m;
    this.exponent = e;
  }
  add(num){
    if(!num instanceof Numb){ // is it real or not
      throw new Error("Gambare gambare")
    }
  }
}
