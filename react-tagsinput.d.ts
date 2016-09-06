import * as React from 'react';

declare namespace react_tagsinput {
    export interface TagsInputProps {
        value: any[];
        onChange(tags: any[], changed: any[], changedIndexes: number[]);
        addKeys?: number[]; // [9, 13]
        onlyUnique?: boolean; // false
        validationRegex?: RegExp; // /.*/
        maxTags?: number; // -1
        addOnBlur?: boolean; // false
        addOnPaste?: boolean; // false
        pasteSplit?(data: any); // (data) => data.split(' ').map(d => d.trim())
        removeKeys?: number[]; // [8]
        className?: string; // react-tagsinput
        focusedClassName?: string; // react-tagsinput--focused
        tagProps?: React.HTMLProps<HTMLElement>; // {className: 'react-tagsinput-tag', classNameRemove: 'react-tagsinput-remove'}
        inputProps?: React.HTMLProps<HTMLInputElement>;
        renderTag?(props: React.HTMLProps<HTMLElement> & {key: string, tag: any});
        renderInput?(props: React.HTMLProps<HTMLInputElement> & {value: string, addTag: any});
        renderLayout?(tagComponts: React.Component<any, any>, inputComponentL: React.Component<any, any>);
    }

    export interface TagsInputState {
    }
}

declare class _TagsInput extends React.Component<react_tagsinput.TagsInputProps, react_tagsinput.TagsInputState> {
    focus(): void;
    blur(): void;
    accept(): void;
    addTag(tag: any): void;
    clearInput(): void;
}

export = _TagsInput;
