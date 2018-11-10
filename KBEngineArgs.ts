namespace KBEngine 
{
    export class KBEngineArgs
    {
        public address: string = "127.0.0.1";
        public port: number = 20013;
        public serverHeartbeatTick: number = 100;
        public clientType: number = 5;
        public isOnInitCallPropertysSetMethods: boolean = true;
        public isWss: boolean = false;
    }
}