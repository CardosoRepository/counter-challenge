import { test, expect } from "@playwright/test";

test("Check form field names", async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    const nameLabelText = await page.textContent('label[for="name"]');
    const phoneLabelText = await page.textContent('label[for="phone"]');
    const emailLabelText = await page.textContent('label[for="email"]');

    expect(nameLabelText).toContain("Nome");
    expect(phoneLabelText).toContain("Telefone");
    expect(emailLabelText).toContain("Email");
});

test("Check if the success modal appears after submitting the form", async ({
    page,
}) => {
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

test("Check if the success modal closes when clicking on 'X'", async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    await page.click('button[id="startChallenge"]');

    await page.click('button[type="submit"]');

    await page.waitForSelector("dialog#success");

    await page.click("dialog#success .btn-ghost");
    
    expect(await page.isVisible("dialog#success modal-open")).toBe(false);
});

test("Check if the fail modal closes when clicking on 'X'", async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    await page.click('button[id="startChallenge"]');

    await page.waitForTimeout(15000);

    await page.waitForSelector("dialog#fail");

    await page.click("dialog#fail .btn-ghost");
    
    expect(await page.isVisible("dialog#fail modal-open")).toBe(false);
});

test("Check if the success modal closes when clicking outside the modal", async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    await page.click('button[id="startChallenge"]');

    await page.click('button[type="submit"]');

    await page.waitForSelector("dialog#success");

    await page.mouse.click(5, 5);
    
    expect(await page.isVisible("dialog#success modal-open")).toBe(false);
});

test("Check if the fail modal closes when clicking outside the modal", async ({ page }) => {
    await page.goto("https://lesser-test.vercel.app");

    await page.click('button:has-text("Iniciar Desafio")');

    await page.waitForTimeout(15000);

    await page.waitForSelector("dialog#fail");

    await page.mouse.click(5, 5);

    expect(await page.isVisible("dialog#fail modal-open")).toBe(false);
});