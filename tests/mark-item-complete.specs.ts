import { test, expect } from '@playwright/test';

test.describe('Mark Item as Complete', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const input = page.locator('input.new-todo');
    await input.fill('Buy milk');
    await input.press('Enter');
  });

  test('should mark an item as completed', async ({ page }) => {
    const item = page.locator('li.todo >> text=Buy milk');
    await page.click('li.todo >> text=Buy milk >> input.toggle');

    await expect(item).toHaveClass(/completed/);
  });
});
