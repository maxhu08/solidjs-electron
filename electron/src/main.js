import { app, BrowserWindow } from "electron/main";
import { fileURLToPath } from "url";
import path, { dirname } from "path";

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const isDev = process.argv.includes("--mode=dev");

const createWindow = () => {
  const win = new BrowserWindow({
    width: 800,
    height: 600,
    alwaysOnTop: true // keeps the window always focused
  });

  if (isDev) {
    // load localhost:3000 during development
    win.loadURL("http://localhost:3000");
    win.webContents.openDevTools();
  } else {
    // load index.html in production
    win.loadFile(path.join(__dirname, "../../solidjs_dist/index.html"));
  }
};

app.whenReady().then(() => {
  createWindow();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow();
    }
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") {
    app.quit();
  }
});
