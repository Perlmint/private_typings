import phantom = require("phantom");
type SslProtocol = "sslv3" | "sslv2" | "tlsv1" | "any";
type ProxyType = "http" | "socks5" | "none";
type HorsemanPromise<T> = Promise<T> & Horseman;
type ScreenshotType = "PNG" | "GIF" | "JPEG";
type RequestType = "GET" | "POST" | "PUT";
type CookieObject = {
    domain: string;
    httponly: boolean;
    name: string;
    path: string;
    secure: boolean;
    value: string;
};
type ResourceError = {
    id: number;
    url: string;
    errorCode: number;
    errorString: string;
};
type Rect = {
    bottom: number;
    height: number;
    left: number;
    right: number;
    top: number;
    width: number;
};
type PaperSize = {
    margin: string;
} & ({
    width: string;
    height: string;
} | {
    format: "A3" | "A4" | "A5" | "Legal" | "Letter" | "Tabloid";
    orientation: "portrait" | "landscape";
});
type MouseEventType = "mouseup" | "mousedown" | "mousemove" | "doubleclick" | "click";
type MouseButton = "left" | "right" | "middle";
type KeyboardEventType = "keyup" | "keydown" | "keypress";
type KeyboardModifier = 0x02000000 | 0x04000000 | 0x08000000 | 0x10000000 | 0x20000000;
type Page = any;

interface HorsemanOption {
    // how long to wait for page loads or wait periods, default 5000 ms.
    timeout?: number;
    // how frequently to poll for page load state, default 50 ms.
    interval?: number;
    // load all inlined images, default true.
    loadImages?: boolean;
    // switch to new tab when created, default false.
    switchToNewTab?: boolean;
    // enable disk cache, default false.
    diskCache?: boolean;
    // location for the disk cache. (requires PhantomJS 2.0.0 or above)
    diskCachePath?: string;
    // A file where to store/use cookies.
    cookiesFile?: string;
    // ignores SSL errors, such as expired or self-signed certificate errors.
    ignoreSSLErrors?: boolean;
    // sets the SSL protocol for secure connections [sslv3|sslv2|tlsv1|any], default any.
    sslProtocol?: SslProtocol;
    // enables web security and forbids cross-domain XHR.
    webSecurity?: boolean;
    // whether jQuery is automatically loaded into each page. Default is true. If jQuery is already present on the page, it is not injected.
    injectJquery?: boolean;
    // whether bluebird is automatically loaded into each page. Default is false. If true and Promise is already present on the page, it is not injected. If 'bluebird' it is always injected as Bluebird, whether Promise is present or not.
    injectBlueBird?: boolean;
    // whether or not to enable bluebird debug features. Default is false. If true non-minified bluebird is injected and long stack traces are enabled
    bluebirdDebug?: boolean;
    // specify the proxy server to use address:port, default not set.
    proxy?: string;
    // specify the proxy server type [http|socks5|none], default not set.
    proxyType?: ProxyType;
    // specify the auth information for the proxy user:pass, default not set.
    proxyAuth?: string;
    // If PhantomJS is not installed in your path, you can use this option to specify the executable's location.
    phantomPath?: string;
    // Explicit PhantomJS options, e.g. {'ssl-certificates-path': 'ca.pem'}. For a complete list refer to the PhantomJS command line interface. These options have precedence over options implicitly set by Horseman.
    phantomOptions?: phantom.PhantomConfig;
    // Enable web inspector on specified port, default not set.
    debugPort?: number;
    // Autorun on launch when in debug mode, default is true.
    debugAutorun?: boolean;
}

declare class Horseman {
    constructor(options?: HorsemanOption);
    /// Dynamically set proxy settings (requires PhantomJS 2.0.0 or above). The ip argument can either be the IP of the proxy server, or a URI of the form type://user:pass@ip:port.
    ///    The port is optional and defaults to 80. The type is optional and defaults to 'http'. The user and pass are the optional username and password for authentication, by default no authentication is used.
    setProxy(ip: string, port?: number, type?: ProxyType, user?: string, password?: string): HorsemanPromise<void>;
    /// Closes the Horseman instance by shutting down PhantomJS.
    close();
    /// Load the page at url.
    open(url: string): HorsemanPromise<void>;
    open(url: string, method: RequestType): HorsemanPromise<void>;
    /// POST postData to the page at url.
    post(url: string, postData?: any): HorsemanPromise<void>;
    /// PUT putData to the page at url.
    put(url: string, putData?: any): HorsemanPromise<void>;
    /// Go back to the previous page.
    back(): HorsemanPromise<void>;
    /// Go forward to the next page.
    forward(): HorsemanPromise<void>;
    /// The HTTP status code returned for the page just opened.
    status(): HorsemanPromise<number>;
    /// Refresh the current page.
    reload(): HorsemanPromise<void>;
    cookies(cookieFilePath: string): HorsemanPromise<void>;
    cookies(cookieObject: CookieObject[]): HorsemanPromise<void>;
    cookies(): HorsemanPromise<CookieObject[]>;
    /// Set the userAgent used by PhantomJS. You have to set the userAgent before calling
    userAgent(UAString: string): HorsemanPromise<void>;
    /// Set the headers used when requesting a page. The headers are a javascript object. You have to set the headers before calling .open().
    headers(headers: {[key: string]: string}): HorsemanPromise<void>;
    /// Set the user and password for accessing a web page using basic authentication. Be sure to set it before calling .open(url).
    authentication(user: string, password: string): HorsemanPromise<void>;
    /// Set the width and height of the viewport, useful for screenshotting. You have to set the viewport before calling .open().
    viewport(width: number, height: number): HorsemanPromise<void>;
    /// Scroll to a position on the page, relative to the top left corner of the document.
    scrollTo(top: number, height: number): HorsemanPromise<void>;
    /// Set the amount of zoom on a page. The default zoomFactor is 1. To zoom to 200%, use a zoomFactor of 2. Combine this with viewport to produce high DPI screenshots.
    zoom(zoomFactor: number): HorsemanPromise<void>;

    /// Get the title of the current page.
    title(): HorsemanPromise<string>;
    /// Get the URL of the current page.
    url(): HorsemanPromise<string>;
    /// Determines if a selector is visible, or not, on the page. Returns a boolean.
    visible(selector: string): HorsemanPromise<boolean>;
    /// Determines if the selector exists, or not, on the page. Returns a boolean.
    exists(selector: string): HorsemanPromise<boolean>;
    /// Counts the number of selector on the page. Returns a number.
    count(selector: string): HorsemanPromise<number>;
    /// Gets the HTML inside of an element. If no selector is provided, it returns the HTML of the entire page. If file is provided, the HTML will be written to that filename.
    html(selector?: string): HorsemanPromise<string>;
    html(selector?: string, file?: string): HorsemanPromise<void>;
    /// Gets the text inside of an element.
    text(selector?: string): HorsemanPromise<string>;
    /// Gets the plain text of the whole page (using PhantomJS's plainText property).
    plainText(): HorsemanPromise<string>;
    /// Get, or set, the value of an element.
    value(selector?: string, val?: string): HorsemanPromise<string>;
    /// Gets an attribute of an element.
    attribute(selector: string, attribute: string): HorsemanPromise<string>;
    /// Gets a CSS property of an element.
    cssProperty(selector: string, property: string): HorsemanPromise<string>;
    /// Gets the width of an element.
    width(selector: string): HorsemanPromise<number>;
    /// Gets the height of an element.
    height(selector: string): HorsemanPromise<number>;
    /// Saves a screenshot of the current page to the specified path. Useful for debugging.
    screenshot(path: string): HorsemanPromise<void>;
    /// Returns a base64 encoded string representing the screenshot. Type must be one of 'PNG', 'GIF', or 'JPEG'.
    screenshotBase64(type: ScreenshotType): HorsemanPromise<string>;
    /// Takes a cropped screenshot of the page. area can be a string identifying an html element on the screen to crop to, or a getBoundingClientRect object.
    crop(area: string | Rect, path: string): HorsemanPromise<void>;
    /// Returns a string representing a cropped, base64 encoded screenshot of the page. area can be a string identifying an html element on the screen to crop to, or a getBoundingClientRect object. Type must be one of 'PNG', 'GIF', or 'JPEG'.
    cropBase64(area: string | Rect, type: ScreenshotType): HorsemanPromise<string>;
    /// Renders the page as a PDF. The default paperSize is US Letter.
    pdf(path: string, paperSize?: PaperSize): HorsemanPromise<void>;
    /// Outputs the results of the last call in the chain, or a string you provide, without breaking the chain.
    log(): HorsemanPromise<void>;
    /// Run an function without breaking the chain. Works with asynchronous functions. Must call the callback when complete.
    do(fn: (done: () => void) => void): HorsemanPromise<void>;
    /// Invokes fn on the page with args. On completion it returns a value. Useful for extracting information from the page.
    evaluate<T>(fn: (...args) => T, ...args): HorsemanPromise<T>;
    /// Clicks the selector element once.
    click(selector: string): HorsemanPromise<void>;
    /// Sets the value of a select element to value.
    select(selector: string, value: string): HorsemanPromise<void>;
    /// Sets the value of an element to ''.
    clear(selector: string): HorsemanPromise<void>;
    /// Enters the text provided into the selector element. Options is an object containing eventType ('keypress', 'keyup', 'keydown'. Default is 'keypress') and modifiers, which is a string in the form of ctrl+shift+alt.
    type(selector: string, text: string, options?: any): HorsemanPromise<void>;
    /// Specify the path to upload into a file input selector element.
    upload(selector: string, path: string): HorsemanPromise<void>;
    /// Download the contents of url. If path is supplied the contents will be written there, otherwise this gets the contents. If binary is true it gets the contents as a node Buffer, otherwise it gets them as a string (binary defaults to false).
    download(url: string, path: string): HorsemanPromise<void>;
    download(url: string, path: string, binary: true): HorsemanPromise<void>;
    download(url: string): HorsemanPromise<string>;
    download(url: string, binary: true): HorsemanPromise<ArrayBuffer>;
    /// Inject a JavaScript file onto the page.
    injectJs(file: string): HorsemanPromise<void>;
    /// Include an external JavaScript script on the page via URL.
    includeJs(url: string): HorsemanPromise<void>;
    /// Send a mouse event to the page. Each event is sent to the page as if it comes from real user interaction. type must be one of 'mouseup', 'mousedown', 'mousemove', 'doubleclick', or 'click', which is the default. x and y are optional and specify the location on the page to send the mouse event. button is also optional, and defaults to 'left'.
    mouseEvent(type: MouseEventType, x?: number, y?: number, button?: MouseButton): HorsemanPromise<void>;
    /// Send a keyboard event to the page. Each event is sent to the page as if it comes from real user interaction. type must be one of 'keyup', 'keydown', or 'keypress', which is the default. key should be a numerical value from this page. For instance, to send an "enter" key press, use .keyboardEvent('keypress',16777221).
    keyboardEvent(type: KeyboardEventType, key: number, modifier?: KeyboardModifier): HorsemanPromise<void>;

    /// Wait for ms milliseconds e.g. .wait(5000)
    wait(ms: number): HorsemanPromise<void>;
    /// Wait until a page finishes loading, typically after a .click().
    waitForNextPage(): HorsemanPromise<void>;
    /// Wait until the element selector is present, e.g., .waitForSelector('#pay-button')
    waitForSelector(selector: string): HorsemanPromise<void>;
    /// Wait until the fn evaluated on the page returns the specified value. fn is invoked with args.
    waitFor(fn: (...args) => boolean, ...args): HorsemanPromise<void>;

    /// Get the name of the current frame.
    frameName(): HorsemanPromise<string>;
    /// Get the number of frames inside the current frame.
    frameCount(): HorsemanPromise<number>;
    /// Get the names of the frames inside the current frame.
    frameNames(): HorsemanPromise<string[]>;
    /// Switch to the frame that is in focus.
    switchToFocusedFrame(): HorsemanPromise<void>;
    /// Switch to the frame specified by a frame name or a frame position.
    switchToFrame(nameOrPosition: string): HorsemanPromise<void>;
    /// Switch to the main frame of the page.
    switchToMainFrame(): HorsemanPromise<void>;
    /// Switch to the parent frame of the current frame. Resolves to true it switched frames and false if it did not (i.e., the main frame was the current frame).
    switchToParentFrame(): HorsemanPromise<void>;

    /// Open a URL in a new tab. Fires a tabCreated event. Also, the newly created tab becomes the current tab.
    openTab(url: string): HorsemanPromise<void>;
    /// Returns the number of tabs currently open.
    tabCount(): HorsemanPromise<number>;
    /// Switch to another tab. Count starts at 0.
    switchToTab(tabnumber: number): HorsemanPromise<void>;
    /// Close an open tab. Count starts at 0.
    closeTab(tabNum: number): HorsemanPromise<void>;

    /// Respond to page events with the callback. Be sure to set these before calling .open(). The callback is evaluated in node. If you need to return from callback, you probably want .at instead.
    on(event: "initialized" | "loadStarted", callback: () => void): HorsemanPromise<void>;
    on(event: "loadFinished", callback: (status: number) => void): HorsemanPromise<void>;
    on(event: "tabCreated" | "tabClosed", callback: (tabNum: number) => void): HorsemanPromise<void>;
    on(event: "urlChanged", callback: (targetUrl: string) => void): HorsemanPromise<void>;
    on(event: "navigationRequested", callback: (url: string, type: RequestType, willNavigate: boolean, main) => void): HorsemanPromise<void>;
    on(event: "resourceRequested", callback: (requestData: any, networkRequest: any) => void): HorsemanPromise<void>;
    on(event: "resourceReceived", callback: (response: any) => void): HorsemanPromise<void>;
    on(event: "resourceTimeout", callback: (request) => void): HorsemanPromise<void>;
    on(event: "resourceError", callback: (resourceError: ResourceError) => void): HorsemanPromise<void>;
    on(event: "consoleMessage", callback: (msg: string, lineNumber: number, sourceId: number) => void): HorsemanPromise<void>;
    on(event: "alert" | "confirm" | "timeout", callback: (msg: string) => void): HorsemanPromise<void>;
    on(event: "prompt", callback: (msg: string, defaultValue: string) => void): HorsemanPromise<void>;
    on(event: "error", callback: (msg: string, trace: string) => void): HorsemanPromise<void>;
    on(event: "callback", callback: (data: any) => void): HorsemanPromise<void>;
    on(event: "closing" | "pageCreated", callback: (page: Page) => void): HorsemanPromise<void>;

    /// Respond to page events with the callback. Be sure to set these before calling .open(). The callback is evaluated in PhantomJS. If you do not need to return from callback, you probably want .on instead.
    at(event: "confirm", callback: (msg: string) => boolean): HorsemanPromise<void>;
    at(event: "prompt", callback: (msg: string, defaultValue: string) => string): HorsemanPromise<void>;
    at(event: "filePicker", callback: (oldFile: string) => string): HorsemanPromise<void>;

    onLoadError(handler: () => boolean): HorsemanPromise<void>;

    static registerAction(name: string, fn: (...arg) => any);
}

export = Horseman;
