class Numb {
    constructor(m, e) { // mantissa exponent
        this.mantissa = m;
        this.exponent = e;
    }
    clone() {
        const clonea = new Numb(this.mantissa, this.exponent);
        return clonea;
    }
    refine() {
        if (this.mantissa >= 10) {
            for (let i = 0; this.mantissa >= 10; i++) {
                this.mantissa = this.mantissa / 10;
                this.exponent = this.exponent + 1;
            }
        }
    }
    add(num) {
        if (!num instanceof Numb) { // is it real or not
            throw new Error("Gambare gambare")
        }
        if (num.mantissa && num.exponent) {
            const difference = this.exponent - num.exponent;
            if (difference <= 0) {
                if (difference < -3) {
                    this.mantissa = num.mantissa;
                    this.exponent = num.exponent;
                }
                this.mantissa = this.mantissa + num.mantissa/Math.pow(10,difference)
            }
            if (difference > 0) {
                if (difference > 3) {
                    return false
                }
                this.mantissa = this.mantissa + num.mantissa / Math.pow(10, difference)
            }
        }
    }
    sub(num) {
        if (!num instanceof Numb) { // is it real or not
            throw new Error("Gambare gambare")
        }
        if (num.mantissa && num.exponent) {
            const difference = this.exponent - num.exponent;
            if (difference <= 0) {
                if (difference < -3) {
                    this.mantissa = num.mantissa;
                    this.exponent = num.exponent;
                }
                this.mantissa = this.mantissa - num.mantissa / Math.pow(10, difference)
            }
            if (difference > 0) {
                if (difference > 3) {
                    return false
                }
                this.mantissa = this.mantissa - num.mantissa / Math.pow(10, difference)
            }
        }
    }
    mul(num) {
        if (!num instanceof Numb) { // is it real or not
            throw new Error("Gambare gambare")
        }
        this.exponent = this.exponent + num.exponent
    }
    div(num) {
        if (!num instanceof Numb) { // is it real or not
            throw new Error("Gambare gambare")
        }
        this.exponent = this.exponent - num.exponent
    }
    pow(num) {
        if(!num instanceof Numb) { // is it real or not
            throw new Error("Gambare gambare")
        }
        if (num.exponent != 0) {
            this.exponent = this.exponent * Math.pow(10, num.exponent) // 1e3^1e1 = 1e3*10=1e30
        } else {
            this.exponent = this.exponent * num.mantissa // 1e3^2=1e6
        }
    }
    log(b) {
        if (b == 10) {
            this.mantissa = this.exponent;
            this.exponent = 0;
            this.refine()
        } else { // heavy approximation because im Stupid(TM)
            if (b == 2) {
                this.mantissa = this.exponent * 3.32;
                this.exponent = 0;
                this.refine();
            }
            if (b == 3) {
                this.mantissa = this.exponent * 2.06;
                this.exponent = 0;
                this.refine();
            }
            if (b == 4) {
                this.mantissa = this.exponent * 1.65;
                this.exponent = 0;
                this.refine();
            }
        }

    }
}
