# oof-web-app

```
# run dev-build locally against production backends:
npm start
```

App will be accessible via http://localhost:3000/


```
# build for deployment
npm run build

# deploy to Firebase (after building)
firebase deploy
```

```
# run locally with Firebase Emulators (uses the build directory, so requires a build):
firebase emulators:start --import seed --export-on-exit
```

App will be accessible via http://localhost:5000/

To use the dev-build AND Firebase Emulators Suite, need to run the emulators in one terminal, and the dev-build with emulators enabled in another terminal:

```
# run dev-build locally against Firebase Emulators Suite
# in one terminal:
firebase emulators:start --import seed --export-on-exit
# in another temrinal:
REACT_APP_USE_FIREBASE_EMULATORS=1 npm start
```

Dev-build app will be accessible via http://localhost:3000/ (note that the app will also be accessible on port 5000, but that's the deploy build)
