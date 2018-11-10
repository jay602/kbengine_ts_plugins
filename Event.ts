namespace KBEngine 
{
    class EventInfo
    {
        readonly classinst : any ;
        readonly callbackfn : Function ;

        constructor(classinst: any, callbackfn : Function) {
            this.classinst = classinst;
            this.callbackfn = callbackfn;
        }
    }

    class FiredEvent
    {
        readonly evtName: string;
        readonly evtInfo: EventInfo;
        readonly args: any;

        constructor(evtName: string, evtInfo: EventInfo, args: any) {
            this.evtName = evtName;
            this.evtInfo = evtInfo;
            this.args = args;
        }
    }

    export class Event
    {
        private static  _events: any = {};
        private static  _isPause: boolean = false;
        private static _firedEvents: Array<FiredEvent> = [];

        static register(evtName: string, classinst: any, strCallback: string): void
        {
            let callbackfn = classinst[strCallback];

            if(callbackfn == undefined)
            {
                Dbg.ERROR_MSG('KBEngine.Event::fire: not found strCallback(' + classinst  + ")!"+strCallback);
                return;
            }

            let evtlst = this._events[evtName];  
            if(evtlst == undefined)
            {
                evtlst = [];
                this._events[evtName] = evtlst;
            }

            let info = new EventInfo(classinst, callbackfn);
            evtlst.push(info);
        }

        static deregisterAll(classinst: any): void
        {
            for(var itemkey in this._events)
            {
                this.deregister(itemkey, classinst);
            }
        }

        static deregister(evtName: string, classinst: any): void
        {
            let evtlst: Array<EventInfo> = this._events[evtName];
            if(evtlst == undefined)
            {
                Dbg.ERROR_MSG("Event::deregister:cant find event by name(%s).", evtName);
                return;
            }

            while(true)
            {
                var found = false;
                for(var i=0; i<evtlst.length; i++)
                {
                    var info = evtlst[i];
                    if(info.classinst == classinst)
                    {
                        evtlst.splice(i, 1);
                        found = true;
                        break;
                    }
                }
                
                if(!found)
                    break;
            }

            this.removeFiredEvent(evtName, classinst);
        }

        static fire(evtName: string, ...params: any[]): void
        {
            let evtlst: Array<EventInfo> = this._events[evtName];
            if(evtlst == undefined)
            {
                Dbg.ERROR_MSG("Event::Fire:cant find event by name(%s).", evtName);
                return;
            }

            for(let info of evtlst)
            {
                try
                {
                    if(!this._isPause)
                    {
                        info.callbackfn.apply(info.classinst, params);
                    }
                    else
                    {
                        let firedEvent = new FiredEvent(evtName, info, params);
                        this._firedEvents.push(firedEvent);
                    }
                    
                }
                catch(e)
                {
                    Dbg.ERROR_MSG("Event::Fire(%s):%s", evtName, e);
                }
            }
        }

        static pause(): void
        {
            this._isPause = true;
        }

        static resume(): void
        {
            this._isPause = false;

            let firedEvents: Array<FiredEvent> = this._firedEvents;
            Dbg.INFO_MSG("resume");
            while(firedEvents.length > 0)
            {
                var evt = firedEvents.shift();
                var info = evt.evtInfo;
                var args = evt.args;
                Dbg.INFO_MSG("resume evtname: " + evt.evtName);
                if(args.length < 1)
                {
                    info.callbackfn.apply(info.classinst);
                }
                else
                {
                    info.callbackfn.apply(info.classinst, args);
                }
            }
        }

        static removeAllFiredEvent(classinst: any): void
        {
            this.removeFiredEvent("", classinst);
        }

        static removeFiredEvent(evtName: string, classinst: any): void
        {
            let firedEvents:Array<FiredEvent> = this._firedEvents;
            while(true)
            {
                var found = false;
                for(var i=0; i<firedEvents.length; i++)
                {
                    var evt = firedEvents[i];
                    if((evtName == "" || evt.evtName == evtName) && evt.evtInfo.classinst == classinst)
                    {
                        firedEvents.splice(i, 1);
                        found = true;
                        break;
                    }
                }

                if(!found)
                    break;
            }
        }
    }
}