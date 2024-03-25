<script lang="ts">
    import {
        countdown,
        formatTime,
    } from "./../../store.js";
</script>

<h1>Contador: <span id="counter">{formatTime($countdown)}</span></h1>
