<script lang="ts">
    import TimerDisplay from "../lib/components/TimerDisplay.svelte";
    import { countdown, startCountdown, challengeStarted, resetCountdown } from "../store";

    countdown.subscribe((value) => {
        if (value === 0) {
            // show();
        }
    });

    function show(): void {
        const modal2 = document.getElementById(
            "my_modal_3"
        ) as HTMLDialogElement;
        modal2 && modal2.showModal();
    }

    function startChallengeCountdown() {
        if (!$challengeStarted) {
            startCountdown();
            challengeStarted.set(true);
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        const formData = new FormData(event.target);
        const formObject = {};
        formData.forEach((value, key) => {
            formObject[key] = value;
        });

        console.log("Handle Submit");
    }

    function resetTimer() {
        resetCountdown();
    }
</script>

<div class="flex justify-end">
    <button class="btn btn-secondary m-4" on:click={resetTimer}>Reset Timer</button>
    <a href="/candidate">
        <button class="btn btn-secondary m-4">Candidato</button>
    </a>
</div>
<div class="flex bg-slate-700 rounded-xl justify-center p-4 m-4">
    <form
        class="flex flex-col form-create space-y-4 w-2/3 py-4"
        on:submit={handleSubmit}
    >
        <div class="form-control">
            <label for="name" class="font-semibold">Nome</label>
            <input type="text" name="name" id="name" />
        </div>
        <div class="form-control">
            <label for="phone" class="font-semibold">Telefone</label>
            <input type="text" name="phone" id="phone" />
        </div>
        <div class="form-control">
            <label for="email" class="font-semibold">Email</label>
            <input type="text" name="email" id="email" />
        </div>
        <TimerDisplay />

        {#if !$challengeStarted}
            <button
                class="btn btn-primary"
                type="button"
                on:click={startChallengeCountdown}>Iniciar Desafio</button
            >
        {:else}
            <button class="btn btn-primary" type="submit">Enviar</button>
        {/if}
    </form>
</div>

<dialog id="my_modal_3" class="modal">
    <div class="modal-box">
        <form method="dialog">
            <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                >✕</button
            >
        </form>
        <h3 class="font-bold text-lg">Hello!</h3>
        <p class="py-4">Press ESC key or click on ✕ button to close</p>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button>close</button>
    </form>
</dialog>

<style>
    .form-control > input {
        padding: 0.5rem;
        margin: 0.25rem 0 0.25rem 0;
        border-radius: 0.7rem;
    }
</style>
