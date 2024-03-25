// timerStore.js
import { writable } from "svelte/store";

// Initial time for the countdown
const initialTime = 15;

// Store writable for the countdown
export const countdown = writable(initialTime);
export const challengeStarted = writable(false);

export function formatTime(time) {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

// Initializes countdown
let interval;
export function startCountdown() {
    challengeStarted.set(true);
    interval = setInterval(() => {
        countdown.update((value) => {
            if (value === 0) {
                clearInterval(interval);
                return value;
            } else {
                return value - 1;
            }
        });
    }, 1000);
}

// Pause the countdown
export function pauseCountdown() {
    clearInterval(interval);
}

// Restart the countdown
export function resetCountdown() {
    countdown.set(initialTime);
    challengeStarted.set(false);
    pauseCountdown();
}
