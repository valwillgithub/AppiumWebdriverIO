class AddNoteScreen {
	get skipBtn() {
		return $('//*[contains(@resource-id,"btn_start_skip")]');
	}

	get addNoteButton() {
		return $('//*[@text="Add note"]');
	}

	get selectTextOption() {
		return $('//*[@text="Text"]');
	}

	get editingText() {
		return $('//*[@text="Editing"]');
	}

	get noteHeading() {
		return $('//*[contains(@resource-id,"edit_title")]');
	}

	get noteBody() {
		return $('//*[contains(@resource-id,"edit_note")]');
	}

	get editBtn() {
		return $('//*[contains(@resource-id,"edit_btn")]');
	}

	async saveNote() {
		await driver.back();
		await driver.back();
	}

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
}

module.exports = new AddNoteScreen();
