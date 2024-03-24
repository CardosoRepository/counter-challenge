<script lang="ts">
    import TimerDisplay from "./../../lib/components/TimerDisplay.svelte";
    import { countdown, pauseCountdown } from "../../store";

    let modal: boolean = false;

    countdown.subscribe(value => {
        if (value === 0) {
            show();
        }
    })
    
    function show() {
        const modal2 = document.getElementById('my_modal_3') as HTMLDialogElement;
        modal2 && modal2.showModal();
    }
</script>

<div class="flex justify-end">
    <a href="/candidate">
        <button class="btn btn-secondary m-4">Candidato</button>
    </a>
</div>
<div class="flex bg-slate-700 rounded-xl justify-center p-4 m-4">
    <form class="flex flex-col form-create space-y-4 w-2/3 py-4" method="POST">
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
        <button class="btn btn-primary" type="submit">Enviar</button>
    </form>
</div>

<button on:click={show}>Modal: {modal}</button>

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