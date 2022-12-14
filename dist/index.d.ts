declare function openEditor(specifiedEditor?: string, port?: number | string): {
    webpack: {
        '/__open-in-editor': {
            target: string;
        };
    };
    vite: {
        '/__open-in-editor': {
            target: string;
        };
    };
    rollup: {
        '__open-in-editor': string;
    };
};

export { openEditor };
