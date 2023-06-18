import { writable } from 'svelte/store'

export const username = writable(localStorage.username || "")

username.subscribe((value) => localStorage.username = String(value))
