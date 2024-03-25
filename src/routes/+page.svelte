<script lang="ts">
    import Modal from "./../lib/components/Modal.svelte";
    import TimerDisplay from "../lib/components/TimerDisplay.svelte";
    import {
        countdown,
        startCountdown,
        challengeStarted,
        pauseCountdown,
    } from "../store";
    import { goto } from "$app/navigation";

    export let data;

    let type: "fail" | "success" = null;

    countdown.subscribe((value) => {
        if (value === 0) {
            type = "fail";
            show(type);
        }
    });

    function show(type: "fail" | "success"): void {
        const modal = document.getElementById(type) as HTMLDialogElement;
        modal && modal.showModal();
    }

    function startChallengeCountdown() {
        if (!$challengeStarted) {
            startCountdown();
        }
    }

    function handleSubmit(event) {
        event.preventDefault();

        if ($countdown === 0) {
            return;
        }

        const formData = new FormData(event.target);

        formData.forEach((value, key) => {
            data[key] = value;
        });

        pauseCountdown();
        type = "success";
        show(type);
    }
</script>

<div class="flex justify-end">
    {#if $challengeStarted}
        <button
            class="btn btn-neutral text-base m-4"
            id="candidate"
            on:click={() => {
                goto("/candidate");
            }}>Candidato</button
        >
    {/if}
</div>
<div
    class="flex bg-slate-700 rounded-xl justify-center p-4 m-4"
    class:mt-0={$challengeStarted}
>
    <form
        class="flex flex-col form-create space-y-4 w-2/3 py-4"
        on:submit={handleSubmit}
    >
        <div class="form-control">
            <label
                for="name"
                class="input input-bordered flex items-center gap-2"
            >
                <input
                    type="text"
                    class="grow"
                    placeholder="Nome"
                    name="name"
                    id="name"
                    bind:value={data.name}
                />
            </label>
        </div>
        <div class="form-control">
            <label
                for="phone"
                class="input input-bordered flex items-center gap-2"
            >
                <input
                    type="text"
                    class="grow"
                    placeholder="Telefone"
                    name="phone"
                    id="phone"
                    bind:value={data.phone}
                />
            </label>
        </div>
        <div class="form-control">
            <label
                for="email"
                class="input input-bordered flex items-center gap-2"
            >
                <input
                    type="text"
                    class="grow"
                    placeholder="Email"
                    name="email"
                    id="email"
                    bind:value={data.email}
                />
            </label>
        </div>
        {#if $challengeStarted}
            <TimerDisplay />
        {/if}

        {#if !$challengeStarted}
            <button
                class="btn btn-info text-lg"
                id="startChallenge"
                type="button"
                on:click={startChallengeCountdown}>Iniciar Desafio</button
            >
        {:else}
            <button class="btn btn-info text-lg" type="submit">Enviar</button>
        {/if}
    </form>
</div>

<Modal {type} />

<style>
    :global(body) {
        @apply bg-zinc-900;
    }
</style>
