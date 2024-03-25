<script lang="ts">
    export let data;
</script>

<div class="flex justify-end">
    <a href="/">
        <button class="btn btn-secondary m-4">Voltar</button>
    </a>
</div>
<div class="flex flex-col bg-slate-700 rounded-xl justify-center p-4 m-4">
    <h1>Nome: {data?.name || "-"}</h1>
    <h1>Telefone: {data?.phone || "-"}</h1>
    <h1>email: {data?.email || "-"}</h1>
</div>
