const AddNoteScreen = require('./addnote_screenobject');
class EditNoteScreen {
	get menuBtn() {
		return $('//*[contains(@resource-id,"menu_btn")]');
	}

	get deleteBtn() {
		return $('//*[@text="Delete"]');
	}

	get navigationIcon() {
		return $('//*[contains(@resource-id,"icon_nav")]');
	}

	get trashCan() {
		return $('//*[@text="Trash Can"]');
	}

	get titleInTrashCan() {
		return $(
			'//*[@resource-id="com.socialnmobile.dictapps.notepad.color.note:id/title"]'
		);
	}

	async skipTutorial() {
		await AddNoteScreen.skipBtn.click();
	}

	async addAndSaveNote(noteHeading, noteBody) {
		await AddNoteScreen.addNoteButton.click();
		await AddNoteScreen.selectTextOption.click();
		await expect(AddNoteScreen.editingText).toBeDisplayed();

		await AddNoteScreen.noteHeading.addValue(noteHeading);
		await AddNoteScreen.noteBody.addValue(noteBody);
		await AddNoteScreen.saveNote();
		await expect(AddNoteScreen.editBtn).toBeDisplayed();
	}
}

module.exports = new EditNoteScreen();
