// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from 'vscode';

import IBMiSerializer from './IBMiSerializer';
import IBMiController from './Controller';

// this method is called when your extension is activated
// your extension is activated the very first time the command is executed
export function activate(context: vscode.ExtensionContext) {
	
	// Use the console to output diagnostic information (console.log) and errors (console.error)
	// This line of code will only be executed once when your extension is activated
	console.log('Congratulations, your extension "vscode-ibmi-notebooks" is now active!');

	context.subscriptions.push(
		vscode.workspace.registerNotebookSerializer('ibmi-notebook', new IBMiSerializer()),
		new IBMiController()
	);
}

// this method is called when your extension is deactivated
export function deactivate() {}
