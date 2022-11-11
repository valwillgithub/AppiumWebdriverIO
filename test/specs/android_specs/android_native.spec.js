describe('Android Native Feature Tests', () => {
	it('Access an Activity directly', async () => {
		await driver.startActivity(
			'io.appium.android.apis',
			'.app.AlertDialogSamples'
		);

		await driver.pause(2000);
		await expect($('//*[@text="App/Alert Dialogs"]')).toExist();
	});

	it('Working with Dialog Boxes', async () => {
		await $(
			'//*[@resource-id="io.appium.android.apis:id/two_buttons"]'
		).click();
		//await driver.acceptAlert();
		//await driver.dismissAlert();
		console.log('Alert Text ====>>> ', await driver.getAlertText());
		await $('//*[@resource-id="android:id/button1"]').click();
		await expect($('//*[@resource-id="android:id/alertTitle"]')).not.toExist();
	});

	it('Vertical Scrolling', async () => {
		await $('~App').click();
		await $('~Activity').click();
		// await $(
		// 	'android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)'
		// );
		await $(
			'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
		).click();
		await expect($('~Secure Dialog').toExist());
	});

	it('Horizontal Scrolling', async () => {
		await driver.startActivity('io.appium.android.apis', '.view.Gallery1');
		await $(
			'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'
		).click();
		await $(
			'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()'
		).click();
	});

	it.only('Scrolling Date Exercise', async () => {
		await driver.startActivity('io.appium.android.apis', '.view.DateWidgets1');
		let dateText = await $('//*[contains(@resource-id,"dateDisplay")]');
		let currentDate = await dateText.getText();

		console.log('currentDate ================ ', currentDate);
		await $('~change the date').click();
		//await $('//android.widget.ImageButton[@content-desc="Next month"]').click();

		await $(
			'android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()'
		).click();

		await driver.pause(1000);
		await $('//*[@text="10"]').click();
		await $('//*[@text="OK"]').click();
		await driver.pause(1000);

		let newDate = await dateText.getText();
		await driver.pause(1000);
		await expect(newDate).not.toEqual(currentDate);
	});
});
