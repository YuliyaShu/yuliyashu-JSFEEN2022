import { CallBack } from '../types/callbackType';

class Loader {
    baseLink: string;
    options: { apiKey: string } | Partial<object>;
    constructor(baseLink: string, options: { apiKey: string } | Partial<object>) {
        this.baseLink = baseLink;
        this.options = options;
    }

    getResp<U>(
        { endpoint, options = {} }: { endpoint: string; options?: { apiKey: string } | Partial<object> },
        callback: CallBack<U> = () => {
            console.error('No callback for GET response');
        }
    ): void {
        this.load<U>('GET', endpoint, callback, options);
    }

    handleError(res: Response): Response {
        const { ok, status, statusText } = res;
        if (!ok) {
            if (status === 401 || status === 404) {
                console.log(`Sorry, but there is ${status} error: ${statusText}`);
                throw Error(statusText);
            }
        }
        return res;
    }

    private makeUrl(options: { apiKey: string } | Partial<object>, endpoint: string): string {
        const urlOptions: { apiKey: string } | Partial<object> = { ...this.options, ...options };
        let url = `${this.baseLink}${endpoint}?`;
        const objKeys: Array<string> = Object.keys(urlOptions);
        objKeys.forEach((key: string) => {
            url += `${key}=${urlOptions[key as keyof typeof urlOptions]}&`;
        });

        return url.slice(0, -1);
    }

    public load<T>(method: string, endpoint: string, callback: CallBack<T>, options = {}): void {
        fetch(this.makeUrl(options, endpoint), { method })
            .then(this.handleError)
            .then((res: Response) => res.json())
            .then((data: T) => callback(data))
            .catch((err: string) => console.error(err));
    }
}

export default Loader;
