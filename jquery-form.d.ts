declare interface JQueryAjaxFormOptions extends JQueryAjaxSettings {
    beforeSerialize?(form: JQuery, options: JQueryAjaxFormOptions): boolean;
    beforeSubmit?(arr: any[], form: JQuery, options: JQueryAjaxFormOptions): boolean;
    clearForm?: boolean;
    data?: {};
    dataType?: string;
    error?(error): void;
    forceSync?: boolean;
}

declare interface JQuery {
    ajaxForm(options?: JQueryAjaxFormOptions): JQuery;
    ajaxSubmit(options?: JQueryAjaxSettings): JQuery;
    fieldSerialize(): string;
    fieldValue(): string[];
    resetForm(): JQuery;
    clearForm(): JQuery;
    clearFields(): JQuery;
}
