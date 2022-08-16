interface SourcesUnit {
    readonly category: string;
    readonly country: string;
    readonly description: string;
    readonly id: string;
    readonly language: string;
    readonly name: string;
    readonly url: string;
}

interface SourcesSources extends Array<SourcesUnit> {
    [index: number]: SourcesUnit;
}

// eslint-disable-next-line no-unused-vars
enum Status {
    // eslint-disable-next-line no-unused-vars
    ok = 'ok',
    // eslint-disable-next-line no-unused-vars
    error = 'error',
}

interface SourceInt extends Array<SourcesSources> {
    readonly sources: SourcesSources;
    readonly status: Status.ok;
}

export { SourcesUnit, SourceInt, SourcesSources };
