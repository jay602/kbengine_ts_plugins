class Test
{
    a: string;
    b: string;

    constructor(a: string, b: string)
    {
        this.a = a;
        this.b = b;
    }

    say() {
        console.log("hello world");
    }
}

let a = new Test("1", "2");
KBEngine.Event.register("test", a, "say");
//KBEngine.Event.deregister("test", a);
KBEngine.Event.fire("test");
var b = 100;
KBEngine.Ddb.DEBUG_MSG("error %d", b)
let t = KBEngine.Ddb.getHead();
console.log(t);