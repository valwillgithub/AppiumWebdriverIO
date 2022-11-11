describe('Android Elements Tests', () => {
	it('Find elements by accessibility id', async () => {
		const appOption = await $('~App');
		await appOption.click();
		const actionBar = await $('~Action Bar');
		await expect(actionBar).toBeDisplayed();
	});

	it('Find elements by class name', async () => {
		const className = await $('.android.widget.TextView');
		console.log('className => ', await className.getText());
		await expect(className).toHaveText('API Demos');
	});

	it('Find elements by Xpath', async () => {
		const className = await $('.android.widget.TextView');
		await $('//android.widget.TextView[@content-desc="App"]').click();
		await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();
		await $('//android.widget.Button[@content-desc="List dialog"]').click();
		await $('//android.widget.TextView[@text="Command two"]').click();
		const text = await $(
			"//android.widget.TextView[contains(@resource-id,'message')]"
		).getText();
		//console.log('text is ====================== ', await text.getText());
		console.log('text is ==============>>>>>>>>>>> ', text);
		expect(text).toEqual('You selected: 1 , Command two');
	});

	it('Find elements by UIAutomator UiSelector', async () => {
		await $('android=new UiSelector().text("App")').click();
		await $('android=new UiSelector().textContains("Dialogs")').click();
	});

	it('Find multiple elements', async () => {
		const eles = await $$('android.widget.TextView');
		for (const ele of eles) {
			console.log('Text is =======>>>>>>>>> ', await ele.getText());
		}
	});

	it('Find multiple elements', async () => {
		const eles = await $$('android.widget.TextView');
		for (const ele of eles) {
			console.log('Text is =======>>>>>>>>> ', await ele.getText());
		}
	});

	it.only('Exercise - Working with text field', async () => {
		await $('android=new UiSelector().text("Views")').click();
		await $('android=new UiSelector().textContains("Complete")').click();
		await $('//android.widget.TextView[@content-desc="1. Screen Top"]').click();
		let textField = await $('android.widget.EditText');
		await textField.addValue('Ghana');
		await expect(textField).toHaveText('Ghana');
	});
});
