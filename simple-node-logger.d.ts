declare type LogLevel = "trace" | "debug" | "info" | "warn" | "error" | "fatal" | "all";

declare interface Logger {
	setLevel(level: LogLevel);
	getLevel(): LogLevel;
	log(level: LogLevel, ...messages: any[]);
	info(...messages: any[]);
	trace(...messages: any[]);
	debug(...messages: any[]);
	warn(...messages: any[]);
	error(...messages: any[]);
	fatal(...messages: any[]);
	setAppenders(appenders: Appender[]): void;
	addAppender(appender: Appender): void;
	getAppenders(): Appender;
	isDebug(): boolean;
	isInfo(): boolean;
	
}

declare interface AppenderOption {
	typeName?: string;
	level?: LogLevel;
	levels?: LogLevel[];
	writer?: (...message: any[]) => void;
}

// SimpleLogger
declare interface Manager {
	createConsoleAppender();
	createRollingFileAppender();
	createLogger(option: LoggerOption): Logger;
	createLogger(category: string, level?: LogLevel): Logger;
	createConsoleAppender(option: AppenderOption): Appender;
	createFileAppender(option: AppenderOption): Appender;
	createRollingFileAppender(option: AppenderOption): Appender;
	addAppender(appender: Appender): Appender;
	getAppenders(): Appender[];
	getLoggers(): Logger[];
	startRefreshThread(): void;
	setAllLoggerLevels(level: LogLevel): void;
	readConfig(cb: (err: any) => any): void;
}

declare interface LoggerOption {
	logDirectory?: string;
	logFilePath: string;
	timestampFormat?: string;
	dateFormat?: string;
	readLoggerConfig?: () => LoggerOption;
	level?: LogLevel;
}

declare interface Appender {
	formatter(entry: any): string;
	write(entry: any): void;
	setLevel(level: LogLevel): void;
}

declare interface LoggerStatic {
	createSimpleLogger(): Logger;
	createSimpleLogger(logFile: string): Logger;
	createSimpleLogger(option: LoggerOption): Logger;
	createSimpleFileLogger(logFile: string): Logger;
	createSimpleFileLogger(option: LoggerOption): Logger;
	createRollingFileLogger(option: LoggerOption): Logger;
	createLogManager(option: LoggerOption): Manager;
}

declare var _Static: LoggerStatic;

export = _Static;
