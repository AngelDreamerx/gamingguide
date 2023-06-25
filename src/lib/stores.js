import { writable } from 'svelte/store'

export const username = writable(localStorage.getItem('username') || "")
username.subscribe((value) => localStorage.setItem('username', String(value)))

export const greetingDone = writable(localStorage.getItem('greetingDone'))
greetingDone.subscribe((value) => localStorage.setItem('greetingDone', String(value)))

export const sound = writable(true)

export const chaptersDone = writable(JSON.parse(localStorage.getItem('chaptersDone') || '[]')) // use empty array as fallback
chaptersDone.subscribe((value) => localStorage.setItem('chaptersDone', JSON.stringify(value)))