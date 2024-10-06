export class TestClass {
    initVal = 0

    constructor(v) {
        if (v) {
            this.initVal = v;
        }
    }

    increment() {
        ++this.initVal;
    }

    get value() {
        return this.initVal;
    }

    set value(v) {
        this.initVal = v;
    }
}
