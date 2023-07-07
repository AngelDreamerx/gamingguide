import { writable } from 'svelte/store'

export const username = writable(localStorage.getItem('username') || "")
username.subscribe((value) => localStorage.setItem('username', String(value)))

export const greetingDone = writable(localStorage.getItem('greetingDone'))
greetingDone.subscribe((value) => localStorage.setItem('greetingDone', String(value)))

export const tutorialDone = writable(localStorage.getItem('tutorialDone'))
tutorialDone.subscribe((value) => localStorage.setItem('tutorialDone', String(value)))

export const sound = writable(true)

export const chaptersProgress = writable(JSON.parse(localStorage.getItem('chaptersProgress') || '{}')) // use empty array as fallback
chaptersProgress.subscribe((value) => localStorage.setItem('chaptersProgress', JSON.stringify(value)))

export const displayGlossary = writable(false)
export const displayAchievements = writable(false)

export const displayImpressum = writable(false);