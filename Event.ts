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

    export class Event
    {
        private static  _events: any = {};

        static register(evtName: string, classinst: any, strCallback: string): void
        {
            let callbackfn = classinst[strCallback];

            if(callbackfn == undefined)
            {
                console.error('KBEngine.Event::fire: not found strCallback(' + classinst  + ")!"+strCallback);
                return;
            }

            let evtlst = this._events[evtName];  // 或者let eventList: EventInfo[] = [];
            //let evtlst = this._events[evtName];
            if(evtlst == undefined)
            {
                evtlst = [];
                this._events[evtName] = evtlst;
            }

            let info = new EventInfo(classinst, callbackfn);
            evtlst.push(info);
        }

        static deregister(evtName: string, classinst: any): void
        {
            let evtlst: Array<EventInfo> = this._events[evtName];
            if(evtlst == undefined)
            {
                console.error("Event::deregister:cant find event by name(%s).", evtName);
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
        }

        static fire(evtName: string, ...params: any[]): void
        {
            let evtList: Array<EventInfo> = this._events[evtName];
            if(evtList == undefined)
            {
                console.error("Event::Fire:cant find event by name(%s).", evtName);
                return;
            }

            for(let info of evtList)
            {
                try
                {
                    info.callbackfn.apply(info.classinst, params);
                }
                catch(e)
                {
                    console.error("Event::Fire(%s):%s", evtName, e);
                }
            }
        }
    }
}