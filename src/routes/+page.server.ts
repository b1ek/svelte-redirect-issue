import type { RequestEvent } from "@sveltejs/kit";

export async function load(data: RequestEvent) {
    return {
        origin: `${data.url.protocol}//${data.url.hostname}:${data.url.port}`,
        csrf: 'kit.session=' + encodeURIComponent(data.cookies.get('kit.session') ?? '')
    }
}