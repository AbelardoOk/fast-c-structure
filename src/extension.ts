// The module 'vscode' contains the VS Code extensibility API
// Import the module and reference it with the alias vscode in your code below
import * as vscode from "vscode";

const template = `#include <stdio.h>

int main(){
	printf("Hello World!\\n");
	
	return 0;
}`;

export function activate(context: vscode.ExtensionContext) {
  console.log(
    'Congratulations, your extension "fast-c-structure" is now active!'
  );

  const disposable = vscode.commands.registerCommand(
    "cSnippetStarter.createTemplate",
    () => {
      const editor = vscode.window.activeTextEditor;
      if (editor) {
        editor.edit((editBuilder) => {
          editBuilder.insert(new vscode.Position(0, 0), template);
        });
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}
