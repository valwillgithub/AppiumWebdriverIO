describe('Add Notes to ColorNote Suite', async () => {
	it('Skip tutorial test', async () => {
		await $('//*[contains(@resource-id,"btn_start_skip")]').click();
		//await driver.pause(3000);
		await expect($('//*[@text="Add note"]')).toBeDisplayed();
	});

	it('Add a note, save changes & verify note', async () => {
		await $('//*[@text="Add note"]').click();
		await $('//*[@text="Text"]').click();
		await expect($('//*[@text="Editing"]')).toBeDisplayed();

		await $('//*[contains(@resource-id,"edit_title")]').addValue(
			'Shopping List'
		);

		await $('//*[contains(@resource-id,"edit_note")]').addValue(
			'Eggs\nOranges\nWine\nApple Juice\nMilk'
		);
		await driver.back();
		await driver.back();
		await driver.pause(3000);
		await expect($('//*[contains(@resource-id,"edit_btn")]')).toBeDisplayed();
	});

	it.only('Delete Note Exercise', async () => {
		let title = 'Tesco List';
		await $('//*[contains(@resource-id,"btn_start_skip")]').click();
		await $('//*[@text="Add note"]').click();
		await $('//*[@text="Text"]').click();
		await expect($('//*[@text="Editing"]')).toBeDisplayed();
		await $('//*[contains(@resource-id,"edit_title")]').addValue(title);
		await $('//*[contains(@resource-id,"edit_note")]').addValue(
			'Eggs\nOranges\nWine\nApple Juice\nMilk'
		);
		await driver.back();
		await driver.back();
		await driver.pause(1000);
		await expect($('//*[contains(@resource-id,"edit_btn")]')).toBeDisplayed();
		//Delete process begins
		await $('//*[contains(@resource-id,"menu_btn")]').click();
		await $('//*[@text="Delete"]').click();
		console.log('Delete Alert Text ====>>> ', await driver.getAlertText());
		await driver.acceptAlert();
		await expect($('//*[@text="Add note"]')).toBeDisplayed();
		await $('//*[contains(@resource-id,"icon_nav")]').click();
		await $('//*[@text="Trash Can"]').click();
		let deletedNote = await $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
		).getText();
		console.log('Delete Note ====>>> ', deletedNote);

		await driver.pause(1000);
		await expect(deletedNote).toEqual(title);
	});
});
