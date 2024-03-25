import { test, expect } from "@playwright/test";

test('Verificar os nomes dos campos "label do formulário', async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    const nameLabelText = await page.textContent('label[for="name"]');
    const phoneLabelText = await page.textContent('label[for="phone"]');
    const emailLabelText = await page.textContent('label[for="email"]');

    // Verificar os nomes dos campos "label"
    expect(nameLabelText).toContain("Nome");
    expect(phoneLabelText).toContain("Telefone");
    expect(emailLabelText).toContain("Email");
});

test("Verificar o clique do botão para iniciar o desafio", async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    // Verificar se o botão de iniciar desafio está visível
    const challengeStarted = await page.isVisible(
        'button:has-text("Iniciar Desafio")'
    );

    // Se o desafio não tiver começado, clicar no botão para iniciar o desafio
    if (!challengeStarted) {
        await page.click('button:has-text("Iniciar Desafio")');
    }

    // Esperar 15 segundos
    await page.waitForTimeout(15000);

    // Verificar se o modal está visível
    const modalVisible = await page.isVisible("dialog.modal");

    // Verificar se o modal está visível após 15 segundos
    expect(modalVisible).toBe(true);
});

test("Verificar se o modal de sucesso aparece após enviar o formulário", async ({ page }) => {
    // Navegar até a página que contém o formulário
    await page.goto("https://lesser-test.vercel.app");

    // Clique no botão "Iniciar Desafio"
    await page.click('button[id="startChallenge"]');

    // Aguarde um pequeno atraso para permitir que a página reaja
    await page.waitForTimeout(1000);

    // Clique no botão "Enviar"
    await page.click('button[type="submit"]');

    // Aguarde até que o modal apareça
    await page.waitForSelector("dialog#success");

    // Obtenha o texto do modal
    const modalText = await page.textContent("dialog#success p");

    // Verifique se o texto do modal contém "Desafio finalizado com sucesso!"
    expect(modalText).toContain("Desafio finalizado com sucesso!");
});
