<script lang="ts">
    export let count: number = 0;
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
        <p>Contador: {count}</p>
        <button class="btn btn-primary" type="submit">Adicionar</button>
    </form>
</div>