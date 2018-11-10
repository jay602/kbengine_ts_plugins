namespace KBEngine 
{
    export class NetworkInterface
    {
        private socket: WebSocket = undefined;
        private onOpenCB: Function = undefined;

        get IsGood(): boolean
        {
            return this.socket != undefined && this.socket.readyState === WebSocket.OPEN;
        }

        ConnectTo(addr: string, callbackFunc?: (event:Event)=>any)
        {
           
        }

        Close()
        {
           
        }

        Send(buffer: ArrayBuffer)
        {
           
        }

        private onopen = (event: MessageEvent) =>
        {
            
        }
        
        private onerror = (event: MessageEvent) =>
        {
           
        }

        private onmessage = (event: MessageEvent) =>
        {
           
        }

        private onclose = () =>
        {
           
        }
    }
}