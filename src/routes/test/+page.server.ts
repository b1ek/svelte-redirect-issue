import { base } from "$app/paths";
import { redirect, type RequestEvent } from "@sveltejs/kit";

export const prerender = false;

export const actions = {
    default: async () => redirect(302, base + '/it-worked')
}
