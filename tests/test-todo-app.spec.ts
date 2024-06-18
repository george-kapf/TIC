import { test, expect } from '@playwright/test';

test('Should be able to browse to the To Do App', async ({ page }) => {
  await page.goto('/');
  await expect(page).toHaveTitle('Todo List App');
});
