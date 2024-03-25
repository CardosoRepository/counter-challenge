import "../app.css";
export const prerender = true;
export const ssr = false;

/** @type {import('./$types').LayoutLoad} */
export function load() {
    return { 
        email: "",
        name: "",
        phone: ""
    };
}
