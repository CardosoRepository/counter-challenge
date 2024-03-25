<script lang="ts">
    import { countdown, formatTime } from "./../../store.js";
</script>

<h1 class="text-white font-semibold">Contador: <span id="counter">{formatTime($countdown)}</span></h1>
