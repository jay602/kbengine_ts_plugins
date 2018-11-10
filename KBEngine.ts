namespace KBEngine 
{

    export class KBEngineApp
    {
        public static app: KBEngineApp = undefined;
        private networkInterface: NetworkInterface  = null;

        private args: KBEngineArgs;
    
        private userName: string = "test";
        private password: string = "123456";
        private clientDatas: Uint8Array = new Uint8Array(0);
        private encryptedKey: string = "";
    
    
        private loginappMessageImported: boolean = false;
        private baseappMessageImported: boolean = false;
        private serverErrorsDescrImported: boolean = false;
        private entitydefImported: boolean = false;

         // 登录loginapp的地址
        private serverAddress: string = "";
        private port: number = 0;
        
        // 服务端分配的baseapp地址
        private baseappAddress: string = "";
        private baseappPort: number = 0;

        private isWss: boolean = false;
        private protocol: string = "ws://";

        constructor(args: KBEngineArgs)
        {
            Dbg.ASSERT(KBEngineApp.app === undefined, "KBEngineApp::constructor:singleton KBEngineApp._app must be undefined.");
            KBEngineApp.app = this;
            this.initialize(args);
        }

        static getSingleton()
        {
            if(KBEngineApp.app == undefined)
			{
				throw new Error("Please create KBEngineApp!");
			}

			return KBEngineApp.app;
        }

        public initialize(args: KBEngineArgs): boolean
        {
            this.args = args;
            this.serverAddress = args.address;
            this.port = args.port;
            this.isWss = args.isWss;
            this.protocol = args.isWss ? "wss://" : "ws://";

            this.initNetwork();
            this.installEvents();
            return true;
        }

        initNetwork(): void
        {

        }

        installEvents(): void
        {

        }
    }
}