const EditNoteScreen = require('../../screenobjects/android/editnote_screenobject');
const AddNoteScreen = require('../../screenobjects/android/addnote_screenobject');

describe('Delete Notes TestSuite', () => {
	it('Delete a note & check the note in trash can', async () => {
		let notetitle = 'Shopping List';
		await EditNoteScreen.skipTutorial();
		await EditNoteScreen.addAndSaveNote(
			notetitle,
			'Eggs\nOranges\nWine\nApple Juice\nMilk'
		);

		//Delete process begins
		await EditNoteScreen.menuBtn.click();
		await EditNoteScreen.deleteBtn.click();

		console.log('Delete Alert Text ====>>> ', await driver.getAlertText());
		await driver.acceptAlert();
		await EditNoteScreen.navigationIcon.click();
		await EditNoteScreen.trashCan.click();
		let deletedNote = await EditNoteScreen.titleInTrashCan.getText();
		console.log('Delete Note ====>>> ', deletedNote);

		await driver.pause(1000);
		await expect(deletedNote).toEqual(notetitle);
	});
});
