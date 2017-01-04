import * as React from 'react';

declare namespace react_autocomplete {
    export interface AutocompleteState {
        isOpen: boolean;
        highlightedIndex: any;
    }

    export type AutocompleteProps<T> = {
        value?: string,
        items: T[],
        onChange?: (event, value: string) => void;
        onSelect?: (value: string, item: T) => void;
        shouldItemRender?: () => boolean;
        sortItems?: (a: T, b: T, value: string) => void;
        getItemValue: (item: T) => string;
        renderItem: (item: T, isHighlighted: boolean) => React.ReactElement<any>;
        renderMenu?: (items: React.ReactElement<any>[], value: string, style: React.CSSProperties) => React.ReactElement<any>;
        menuStyle?: React.HTMLProps<HTMLDivElement>;
        inputProps?: React.HTMLProps<HTMLInputElement>;
        wrapperProps?: React.HTMLProps<HTMLDivElement>;
        wrapperStyle?: React.CSSProperties;
        autoHighlight?: boolean;
        onMenuVisibilityChange?: (isOpen: boolean) => void;
        open?: boolean;
        debug?: boolean;
    }
}

declare class Autocomplete<T> extends React.Component<
    react_autocomplete.AutocompleteProps<T>,
    react_autocomplete.AutocompleteState> {
    render();
}

export = Autocomplete;
