
namespace KBEngine 
{
    export const enum DEBUGLEVEL
	{
		DEBUG = 0,
		INFO,
		WARNING,
		ERROR,

		NOLOG,  // 放在最后面，使用这个时表示不输出任何日志（!!!慎用!!!）
    }
    
    export class Dbg
    {
        public static debugLevel:DEBUGLEVEL = DEBUGLEVEL.DEBUG;

        static getHead(): string
        {
            let now: Date = new Date();
            return "[" + now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + now.getDate() + " " + now.getHours() 
            + ":" + now.getMinutes() + ":" + now.getSeconds() + " " + now.getMilliseconds() + "] ";
        }

        static DEBUG_MSG(msg: string, ...params: any[]): void
        {
            if(DEBUGLEVEL.DEBUG >= this.debugLevel)
            {
                params.unshift(this.getHead(), msg);
                console.debug.apply(this, params);
            }
        }

        static INFO_MSG(msg: string, ...params: any[]): void
        {
            if(DEBUGLEVEL.INFO >= this.debugLevel)
            {
                params.unshift(this.getHead(), msg);
                console.info.apply(this, params);
            }
        }

        static WARNING_MSG(msg: string, ...params: any[]): void
        {
            if(DEBUGLEVEL.WARNING >= this.debugLevel)
            {
                params.unshift(this.getHead(), msg);
                console.warn.apply(this, params);
            }
        }
    
        static ERROR_MSG(msg: string, ...params: any[]): void
        {
            if(DEBUGLEVEL.ERROR >= this.debugLevel)
            {
                params.unshift(this.getHead(), msg);
                console.error.apply(this, params);
            }
        }
    
        static ASSERT(condition?: boolean, message?: string, ...data: any[]): void
        {
            // 使用抛出异常的方式来实现类似断言功能
            if(!condition)
            {
                throw(new Error(message));
            }

            // note：微信小游戏平台不支持，手册中提到的CC_WECHATGAME未定义，无法区分是否微信小游戏平台，
            // console.assert(condition, message, ...data);
            // 一些平台如小程序上可能没有assert
            // if(console.assert == undefined)
            // {
            //     console.assert = function(bRet, s)
            //     {
            //         if(!(bRet)) {
            //             ERROR_MSG(s);
            //         }
            //     }
            // }
        }
    }
}