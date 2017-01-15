declare namespace phantom {
    function create(args: string[], option?: PhantomConfig): Promise<Phantom>;
    type LogLevel = "debug" | "info" | "warn" | "error";
    type Logger = (message?: any, ...optionalParams: any[]) => void;
    interface PhantomConfig {
        phantomPath?: string;
        logger?: {
            warn?: Logger;
            debug?: Logger;
            error?: Logger;
            info?: Logger;
        };
        logLevel?: LogLevel;
    }

    type Response = {
        pageId: string
    };

    interface Phantom {
        logger: Logger;
        isNoOpInProgress: boolean;
        commands: {[key: number]: Command};
        heartBeatId: number;
        Phantom(args?: string[], config?: PhantomConfig);

        windowProperty(): Promise<any>;
        createPage(): Promise<Page>;
        crateOutObject(): OutObject;
        callback(obj: (...args) => any): {
            transform: boolean;
            target: (...args) => void;
            method: string;
            parent: string
        };
        executeCommand(command: Command): Promise<Response>;
        execute(target: string, name: string, args?: any[]): Promise<Response>;
        on(event: string, target: string, runOnPhantom: boolean, callback:(...args) => any, args?: any[]): Promise<Response>;
        off(event: string, target: string): Promise<Response>;
        getEmitterForTarget(target: string): any;
        exit(): Promise<Response>;
        kill(errmsg?: string): void;
        
    }

    type Method = "GET" | "POST" | "HEAD";
    type Status = "success" | "fail";
    type RenderFormat = "PNG" | "GIF" | "JPEG";
    type ExtendedRenderFormat = RenderFormat | "PDF" | "BMP" | "PPM";
    type Cookies = {[key: string]: string};
    type Headers = {[key: string]: string};
    type Rect = {
        top: number;
        left: number;
        width: number;
        height: number;
    };

    class Page {
        phantom: Phantom;
        target: string;

        Page(phantom: Phantom, pageId: string);

        on(event: string, listener?, ...args): Promise<Response>;
        on(event: string, runOnPhantom: boolean, listener?, ...args): Promise<Response>;
        off(event: string): Promise<Response>;

        invokeAsyncMethod(method: string, ...args): Promise<Response>;
        invokeMethod(method: string, ...args): Promise<Response>;
        defineMethod(name: string, definition: (...args) => any): Promise<Response>;

        setting(key: string): Promise<any>;
        setting(key: string, value: any): Promise<any>;
        property(key: string): Promise<any>;
        property(key: string, value: any): Promise<any>;

        property(key: "canGoBack"): Promise<boolean>;
        property(key: "canGoBack", value: boolean): Promise<boolean>;
        property(key: "clipRect"): Promise<Rect>;
        property(key: "clipRect", value: Rect): Promise<Rect>;
        property(key: "content"): Promise<string>;
        property(key: "content", value: string): Promise<string>;
        property(key: "cookies"): Promise<Cookies>;
        property(key: "cookies", value: Cookies): Promise<Cookies>;
        property(key: "customHeaders"): Promise<Headers>;
        property(key: "customHeaders", value: Headers): Promise<Headers>;
        property(key: "event"): Promise<any>;
        property(key: "event", value: any): Promise<any>;
        property(key: "frameContent"): Promise<string>;
        property(key: "frameContent", value: string): Promise<string>;
        property(key: "framePlainText"): Promise<string>;
        property(key: "framePlainText", value: string): Promise<string>;
        property(key: "frameUrl"): Promise<string>;
        property(key: "frameUrl", value: string): Promise<string>;
        property(key: "framesName"): Promise<string[]>;
        property(key: "libraryPath"): Promise<string>;
        property(key: "navigationLocked"): Promise<boolean>;
        property(key: "navigationLocked", value: boolean): Promise<boolean>;

        addCookie(cookies: Cookies): Promise<boolean>;
        clearCookies(): Promise<void>;
        close(): Promise<void>;
        deleteCookie(cookieName: string): Promise<boolean>;
        evaluate<T>(func: (...args) => T, ...args: any[]): Promise<T>;
        evaluateAsync<T>(func: (...args) => T, delayInMilliSeconds: number, ...args: any[]): Promise<void>;
        evaluateJavaScript(funcStr: string): Promise<any>;
        exit(returnValue: number): Promise<void>;
        goBack(): Promise<void>;
        goForward(): Promise<void>;
        go(index: number): Promise<void>;
        includeJs(url: string): Promise<void>;
        injectJs(filename: string): Promise<boolean>;
        openUrl(url: string, httpConf?, settings?): Promise<any>;
        open(url: string): Promise<Status>;
        open(url: string, method: Method): Promise<Status>;
        open(url: string, method: Method, data: any): Promise<Status>;
        reload(): Promise<any>;
        render(filename: string, format?: ExtendedRenderFormat, quality?: number): Promise<void>;
        renderBase64(format: RenderFormat): Promise<string>;
        renderBuffer(format: RenderFormat, quality: number): Promise<ArrayBuffer>;
        sendEvent(eventType: string, ...args): Promise<void>;
        setContent(content: string, location: string): Promise<void>;
        stop(): Promise<void>;
        switchToFrame(framePositionOrName): Promise<void>;
        switchToMainFrame(): Promise<void>;
        uploadFile(selector: string, filePath: string): Promise<void>;
    }

    class OutObject {
        target: string;
        OutObject(phantom: Phantom);
        property(name: string): Promise<Response>;
    }

    interface Command {
        id: number;
        target: string;
        name: string;
        params: any[];
        deffered?: {
            resolve: (...args) => any;
            reject: (...args) => any;
        };

        Command(target: string, name: string, params?: any[]);
    }
}

export = phantom;
