import { test, expect } from '@playwright/test';

test.describe('Remove Item', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const input = page.locator('input.new-todo');
    await input.fill('Buy milk');
    await input.press('Enter');
  });

  test('should remove an item from the list', async ({ page }) => {
    const item = page.locator('li.todo >> text=Buy milk');
    await item.hover();
    await page.click('li.todo >> text=Buy milk >> button.destroy');
    ///
    await expect(item).not.toBeVisible();
  });
});
