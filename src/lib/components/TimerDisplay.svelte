<script lang="ts">
    import { onDestroy } from "svelte";
    import {
        countdown,
        startCountdown,
        pauseCountdown,
        formatTime,
    } from "./../../store.js";
    import { derived } from "svelte/store";
    
    let timeRemaining = countdown;
    
    const formattedTime = derived(
        countdown,
        $countdown => formatTime($countdown)
    );


    // startCountdown();

    // onDestroy(() => {
    //     pauseCountdown();
    // });
</script>

<h1>Contador: {formatTime($countdown)}</h1>

<!-- <button type="button" on:click={resetTimer}>Reiniciar</button> -->
