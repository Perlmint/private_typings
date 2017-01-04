import * as React from 'react';

interface PortalProps {
    closeOnEsc?: boolean;
    isOpened?: boolean;
    closeOnOutsideClick?: boolean;
    openByClickOn?: React.ReactElement<any>;
    onOpen?: (node?: React.ReactElement<any>) => void;
    onClose?: () => void;
    beforeClose?: (node: React.ReactElement<any>, resetPortalState: () => void) => void;
    onUpdate?: () => void;
}

interface PortalState {
    active: boolean;
}

declare class Portal extends React.Component<PortalProps, PortalState> {
    render();

    openPortal(props?: PortalProps);
    closePortal(isUnmounted?: boolean);
}

export = Portal;
