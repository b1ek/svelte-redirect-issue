import { base } from "$app/paths";
import { redirect, type RequestEvent } from "@sveltejs/kit";

export const actions = {
    default: async () => redirect(302, base + '/it-worked')
}

export function load(data: RequestEvent) {
    return redirect(302, base + '/it-worked');
}