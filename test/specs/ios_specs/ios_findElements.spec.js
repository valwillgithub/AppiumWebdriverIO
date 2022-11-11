describe('iOS Find Elements', async () => {
	it('find element by accessibility id', async () => {
		await $('~Alert Views').click();
		await $('~Simple').click();
		await expect(await driver.getAlertText()).toContain('Short Title Is Best');
	});
});
