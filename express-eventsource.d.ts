import * as core from "express-serve-static-core";

declare interface EventSourceOption {
    connections: number;
}

declare interface EventSource {
    middleware(): core.Router;
    send(data: any, sender: string): void;
    sender(sender: string): ((any) => void);
}

declare function _EventSourceConstructor(option: EventSourceOption): EventSource;

export = _EventSourceConstructor;
