// adapted from https://github.com/ndazeo/hide-windows/blob/master/extension.js
const {	Meta, Shell } = imports.gi;
const { Workspace } = imports.ui.workspace;
const Main = imports.ui.main;


const isOverviewWindow = Workspace.prototype._isOverviewWindow;


function getActiveWindow() {
	return global.display.focus_window;
}


class Extension {
	enable() {
		// override method:
		// only show windows from active application
		Workspace.prototype._isOverviewWindow = (win) => {
			const activeWindow = getActiveWindow();
			return (!activeWindow)
				? isOverviewWindow(win)
				: (activeWindow.wm_class == win.wm_class);
		};

		Main.overview.toggle();
	}

	disable() {
		// reinstate original:
		Workspace.prototype._isOverviewWindow = isOverviewWindow;
	}
}

function init() {
	return new Extension();
}
