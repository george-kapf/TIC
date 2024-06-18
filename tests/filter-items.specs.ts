import { test, expect } from '@playwright/test';

test.describe('Filter Items', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
    const input = page.locator('input.new-todo');
    await input.fill('Buy milk');
    await input.press('Enter');
    await input.fill('Walk the dog');
    await input.press('Enter');
    await page.click('li.todo >> text=Buy milk >> input.toggle');
  });

  test('should filter active items', async ({ page }) => {
    await page.click('a >> text=Active');
    const activeItems = page.locator('li.todo:not(.completed)');
    await expect(activeItems).toHaveCount(1);
    await expect(activeItems).toContainText('Walk the dog');
  });

  test('should filter completed items', async ({ page }) => {
    await page.click('a >> text=Completed');
    const completedItems = page.locator('li.todo.completed');
    await expect(completedItems).toHaveCount(1);
    await expect(completedItems).toContainText('Buy milk');
  });
});
