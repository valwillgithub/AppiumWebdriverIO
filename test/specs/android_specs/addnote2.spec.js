const AddNoteScreen = require('../../screenobjects/android/addnote_screenobject');

describe('Add Notes to ColorNote Suite', () => {
	//const AddNoteScreen = new AddNoteScreen();
	it('Skip tutorial test', async () => {
		await AddNoteScreen.skipBtn.click();
		await expect(AddNoteScreen.addNoteButton).toBeDisplayed();
	});

	it('Add a note, save changes & verify note', async () => {
		te;
	});

	it.only('Delete Note Exercise', async () => {
		let title = 'Tesco List';
		await AddNoteScreen.skipBtn.click();
		await expect(AddNoteScreen.addNoteButton).toBeDisplayed();
		await AddNoteScreen.addNoteButton.click();
		await AddNoteScreen.selectTextOption.click();
		await expect(AddNoteScreen.editingText).toBeDisplayed();

		await AddNoteScreen.noteHeading.addValue(title);
		await AddNoteScreen.noteBody.addValue(
			'Eggs\nOranges\nWine\nApple Juice\nMilk'
		);
		await AddNoteScreen.saveNote();
		await driver.pause(1000);

		await expect(AddNoteScreen.editBtn).toBeDisplayed();
		//Delete process begins
		await AddNoteScreen.menuBtn.click();
		await AddNoteScreen.deleteBtn.click();

		console.log('Delete Alert Text ====>>> ', await driver.getAlertText());
		await driver.acceptAlert();
		await AddNoteScreen.navigationIcon.click();
		await AddNoteScreen.trashCan.click();
		let deletedNote = await AddNoteScreen.titleInTrashCan.getText();
		console.log('Delete Note ====>>> ', deletedNote);

		await driver.pause(1000);
		await expect(deletedNote).toEqual(title);
	});
});
