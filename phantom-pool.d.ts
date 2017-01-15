import phantom = require("phantom");

declare class PhantomPool {
    use<T>(func: (instance: phantom.Phantom) => T): Promise<T>;
    drain(): Promise<void>;
    clear(): void;
}

interface CreatePoolConfig {
    min?: number;
    max?: number;
    idleTimeoutMillis?: number;
    phantomArgs?: [string[], phantom.PhantomConfig];
}

declare function createPhantomPool(config: CreatePoolConfig): PhantomPool;

export default createPhantomPool;
