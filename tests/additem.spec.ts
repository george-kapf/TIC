import { test, expect } from '@playwright/test';

test.describe('Add Item', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should add a new item to the list', async ({ page }) => {
    const input = page.locator('input.new-todo');
    await input.fill('Buy milk');
    await input.press('Enter');
    ///
    const item = page.locator('li.todo >> text=Buy milk');
    await expect(item).toBeVisible();
  });
});
