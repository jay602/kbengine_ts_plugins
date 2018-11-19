namespace KBEngine 
{
    const enum EventTypes 
    {
        // Create new account.
        // <para> param1(string): accountName</para>
        // <para> param2(string): password</para>
        // <para> param3(bytes): datas // Datas by user defined. Data will be recorded into the KBE account database, you can access the datas through the script layer. If you use third-party account system, datas will be submitted to the third-party system.</para>
        createAccount = "createAccount",

        // Login to server.
        // <para> param1(string): accountName</para>
        // <para> param2(string): password</para>
        // <para> param3(bytes): datas // Datas by user defined. Data will be recorded into the KBE account database, you can access the datas through the script layer. If you use third-party account system, datas will be submitted to the third-party system.</para>
        login = "login",

        // Logout to baseapp, called when exiting the client.	
        logout = "logout",

        // Relogin to baseapp.
        reloginBaseapp = "reloginBaseapp",

        // Request server binding account Email.
        // <para> param1(string): emailAddress</para>
        bindAccountEmail = "bindAccountEmail",

        // Request to set up a new password for the account. Note: account must be online.
        // <para> param1(string): old_password</para>
        // <para> param2(string): new_password</para>
        newPassword = "newPassword",

        // ------------------------------------连接相关------------------------------------

        // Kicked of the current server.
        // <para> param1(uint16): retcode. // server_errors</para>
        onKicked = "onKicked",

        // Disconnected from the server.
        onDisconnected = "onDisconnected",

        // Status of connection server.
        // <para> param1(bool): success or fail</para>
        onConnectionState = "onConnectionState",

        // ------------------------------------logon相关------------------------------------

        // Create account feedback results.
        // <para> param1(uint16): retcode. // server_errors</para>
        // <para> param2(bytes): datas. // If you use third-party account system, the system may fill some of the third-party additional datas. </para>
        onCreateAccountResult = "onCreateAccountResult",

        // Engine version mismatch.
        // <para> param1(string): clientVersion
        // <para> param2(string): serverVersion
        onVersionNotMatch = "onVersionNotMatch",

        // script version mismatch.
        // <para> param1(string): clientScriptVersion
        // <para> param2(string): serverScriptVersion
        onScriptVersionNotMatch = "onScriptVersionNotMatch",

        // Login failed.
        // <para> param1(uint16): retcode. // server_errors</para>
        onLoginFailed = "onLoginFailed",

        // Login to baseapp.
        onLoginBaseapp = "onLoginBaseapp",

        // Login baseapp failed.
        // <para> param1(uint16): retcode. // server_errors</para>
        onLoginBaseappFailed = "onLoginBaseappFailed",

        // Relogin to baseapp.
        onReloginBaseapp = "onReloginBaseapp",

        // Relogin baseapp success.
        onReloginBaseappSuccessfully = "onReloginBaseappSuccessfully",

        // Relogin baseapp failed.
        // <para> param1(uint16): retcode. // server_errors</para>
        onReloginBaseappFailed = "onReloginBaseappFailed",

        // ------------------------------------实体cell相关事件------------------------------------

        // Entity enter the client-world.
        // <para> param1: Entity</para>
        onEnterWorld = "onEnterWorld",

        // Entity leave the client-world.
        // <para> param1: Entity</para>
        onLeaveWorld = "onLeaveWorld",

        // Player enter the new space.
        // <para> param1: Entity</para>
        onEnterSpace = "onEnterSpace",

        // Player leave the space.
        // <para> param1: Entity</para>
        onLeaveSpace = "onLeaveSpace",

        // Sets the current position of the entity.
        // <para> param1: Entity</para>
        set_position = "set_position",

        // Sets the current direction of the entity.
        // <para> param1: Entity</para>
        set_direction = "set_direction",

        // The entity position is updated, you can smooth the moving entity to new location.
        // <para> param1: Entity</para>
        updatePosition = "updatePosition",

        // The current space is specified by the geometry mapping.
        // Popular said is to load the specified Map Resources.
        // <para> param1(string): resPath</para>
        addSpaceGeometryMapping = "addSpaceGeometryMapping",

        // Server spaceData set data.
        // <para> param1(int32): spaceID</para>
        // <para> param2(string): key</para>
        // <para> param3(string): value</para>
        onSetSpaceData = "onSetSpaceData",

        // Start downloading data.
        // <para> param1(int32): rspaceID</para>
        // <para> param2(string): key</para>
        onDelSpaceData = "onDelSpaceData",

        // Triggered when the entity is controlled or out of control.
        // <para> param1: Entity</para>
        // <para> param2(bool): isControlled</para>
        onControlled = "onControlled",

        // Lose controlled entity.
        // <para> param1: Entity</para>
        onLoseControlledEntity = "onLoseControlledEntity",

        // ------------------------------------数据下载相关------------------------------------

        // Start downloading data.
        // <para> param1(uint16): resouce id</para>
        // <para> param2(uint32): data size</para>
        // <para> param3(string): description</para>
        onStreamDataStarted = "onStreamDataStarted",

        // Receive data.
        // <para> param1(uint16): resouce id</para>
        // <para> param2(bytes): datas</para>
        onStreamDataRecv = "onStreamDataRecv",

        // The downloaded data is completed.
        // <para> param1(uint16): resouce id</para>
        onStreamDataCompleted = "onStreamDataCompleted",
    }
}