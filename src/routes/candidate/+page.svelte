<script lang="ts">
	import Modal from './../../lib/components/Modal.svelte';
    import { countdown } from '../../store.js';
    import { goto } from '$app/navigation';

    countdown.subscribe((value) => {
        if (value === 0) {
            show();
        }
    });

    function show(): void {
        const modal2 = document.getElementById("fail") as HTMLDialogElement;
        modal2 && modal2.showModal();
    }
</script>

<div class="flex justify-end">
    <button class="btn btn-neutral text-base m-4" on:click={() => {goto('/')}}>Voltar</button>
</div>
<div class="flex flex-col bg-slate-700 rounded-xl justify-center space-y-2 p-4 m-4 mt-0" id="formData">
    <h1 class="bg-slate-200 p-3 text-black rounded-lg">Nome: Gabriel Cardoso Barbosa</h1>
    <h1 class="bg-slate-200 p-3 text-black rounded-lg">Telefone: +55 62 9 9701-7995</h1>
    <h1 class="bg-slate-200 p-3 text-black rounded-lg">Email: cardosogabrielbarbosa@gmail.com</h1>
</div>

<Modal type="fail" />

<style>
    :global(body) {
        @apply bg-zinc-900;
    }
</style>