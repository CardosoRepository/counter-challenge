<script lang="ts">
    export let name: string;
    export let phone: string;
    export let email: string;
</script>

<div class="flex justify-end">
    <a href="/challenge">
        <button class="btn btn-secondary m-4">Voltar</button>
    </a>
</div>
<div class="flex flex-col bg-slate-700 rounded-xl justify-center p-4 m-4">
    <h1>Nome: {name || "-"}</h1>
    <h1>Telefone: {phone || "-"}</h1>
    <h1>email: {email || "-"}</h1>
</div>