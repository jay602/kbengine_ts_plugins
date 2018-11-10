class Test
{
    a: string;
    b: string;

    constructor(a: string, b: string)
    {
        this.a = a;
        this.b = b;
    }

    say(msg: string) {
        console.log(msg);
    }
}

let a = new Test("1", "2");
KBEngine.Event.register("test", a, "say");
//KBEngine.Event.deregister("test", a);
KBEngine.Event.pause();
KBEngine.Event.fire("test", "hklj");
//KBEngine.Event.deregister("test", a);
KBEngine.Event.resume();

let args = new KBEngine.KBEngineArgs();
args.address = "localhost";
let app = new KBEngine.KBEngineApp(args);
