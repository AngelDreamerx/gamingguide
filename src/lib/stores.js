import { writable } from 'svelte/store'

export const username = writable(localStorage.getItem('username') || "")
username.subscribe((value) => localStorage.setItem('username', String(value)))

export const greetingDone = writable(localStorage.getItem('greetingDone')) // can be undefined so use false as fallback
greetingDone.subscribe((value) => localStorage.setItem('greetingDone', String(value)))

export const sound = writable(true)