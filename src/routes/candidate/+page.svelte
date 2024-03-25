<script lang="ts">
	import Modal from './../../lib/components/Modal.svelte';
    import { countdown } from '../../store.js';
    import { goto } from '$app/navigation';

    export let data;

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
<div class="flex flex-col bg-slate-700 rounded-xl justify-center p-4 m-4 mt-0" id="formData">
    <h1>Nome: {data?.name || "-"}</h1>
    <h1>Telefone: {data?.phone || "-"}</h1>
    <h1>Email: {data?.email || "-"}</h1>
</div>

<Modal type="fail" />