declare global {
    interface Window {
        Telegram: {
            WebApp: {
                initData: string;
                initDataUnsafe: Record<string, any>;
                close: () => void;
                expand: () => void;
                isExpanded: boolean;
                themeParams: {
                    backgroundColor?: string;
                    textColor?: string;
                    hintColor?: string;
                    linkColor?: string;
                    buttonColor?: string;
                    buttonTextColor?: string;
                };
                sendData: (data: string) => void;
                onEvent: (eventType: string, callback: () => void) => void;
                offEvent: (eventType: string, callback: () => void) => void;
                MainButton: {
                    text: string;
                    color: string;
                    textColor: string;
                    isVisible: boolean;
                    isActive: boolean;
                    setText: (text: string) => void;
                    show: () => void;
                    hide: () => void;
                    enable: () => void;
                    disable: () => void;
                    onClick: (callback: () => void) => void;
                };
            };
        };
    }
}

export {};