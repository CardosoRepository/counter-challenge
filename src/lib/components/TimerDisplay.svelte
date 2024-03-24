<script lang="ts">
    import { onDestroy } from "svelte";
    import {
        countdown,
        startCountdown,
        pauseCountdown,
        formatTime,
    } from "./../../store.js";

    startCountdown();

    onDestroy(() => {
        pauseCountdown();
    });
</script>

<h1>Contador: {formatTime($countdown)}</h1>

<!-- <button type="button" on:click={resetTimer}>Reiniciar</button> -->
