import { test, expect } from "@playwright/test";

test('Check form field names', async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    const nameLabelText = await page.textContent('label[for="name"]');
    const phoneLabelText = await page.textContent('label[for="phone"]');
    const emailLabelText = await page.textContent('label[for="email"]');

    expect(nameLabelText).toContain("Nome");
    expect(phoneLabelText).toContain("Telefone");
    expect(emailLabelText).toContain("Email");
});

test("Check if the success modal appears after submitting the form", async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    await page.click('button[id="startChallenge"]');

    await page.click('button[type="submit"]');

    await page.waitForSelector("dialog#success");

    const modalText = await page.textContent("dialog#success p");
    expect(modalText).toContain("Desafio finalizado com sucesso!");
});

test("Check if the fail modal appears after waiting", async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    await page.click('button:has-text("Iniciar Desafio")');

    await page.waitForTimeout(15000);

    await page.waitForSelector("dialog#fail");

    const modalVisible = await page.isVisible("dialog#fail");

    expect(modalVisible).toBe(true);
});
