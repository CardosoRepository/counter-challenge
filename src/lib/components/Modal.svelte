<script lang="ts">
    export let type: "fail" | "success";

    function closeModal() {
        const modal = document.getElementById(type) as HTMLDialogElement;
        modal && modal.close();
    }
</script>

<dialog class="modal" id={type}>
    <div class="modal-box">
        <form method="dialog">
            <button
                class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2"
                on:click={() => closeModal()}>&#10005;</button
            >
        </form>
        <p class="py-4">
            {type === "success"
                ? "Desafio finalizado com sucesso!"
                : "Desafio finalizado com falha!"}
        </p>
    </div>
    <form method="dialog" class="modal-backdrop">
        <button on:click={() => closeModal()}>close</button>
    </form>
</dialog>
