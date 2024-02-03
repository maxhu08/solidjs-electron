# solidjs-electron-template

this is a template for creating an electron app and solidjs app.

the solidjs code is in the app/ directory so make you're there for editing your solidjs code and installing dependecies for solidjs. the electron code is in the electron/ directory.

### getting started

to get started install the dependencies in both the app and electron directories

```bash
# clone template
git clone https://github.com/maxhu08/solidjs-electron.git

# installing app (solidjs) dependecies
cd app
npm install

# installing electron dependecies
cd ../electron
npm install

# delete git info so you can add your own repo
rm -rf .git
```

then start the development server (make sure you're in the top dir)

```
npm run dev
```
