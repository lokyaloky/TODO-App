class A {
    x= 10;
    y=20;
    z=30;
    constructor A(x,y ) {
       console.log(x,y);
    }

    printContext(){
        console.log(this);
    }

    multiplyResult(){
        return this.x * this.y *this.z;
    }
}
const a = new A();

a.printContext();{

}

