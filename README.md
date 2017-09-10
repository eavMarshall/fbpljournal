# React-Redux-Firebase project starter
Currently running @ [https://eavmarshall.github.io/React-redux-firebase/]
This is a start project to quickly get up and running

## Goals
 - MVC design with flux one way data flow
 - React as the view
 - Redux controlling the model (state)
 - Middleware as the controller
 - Persistent data on Firebase
 - Google auth for signing in
 - User having private and public data
 - Automation test done via manipulating the model


## Setup
Install NPM
Install Webpack
Download the project
navigate to the project root and run
```
npm install
```
Create a firebase project, instructions @ https://firebase.google.com/docs/web/setup

set your firebase settings @ /fbpljournal/src/config.js
it should look like:
```
import Firebase from "firebase";

firebase.initializeApp({
  apiKey: "<API_KEY>",
  authDomain: "<PROJECT_ID>.firebaseapp.com",
  databaseURL: "https://<DATABASE_NAME>.firebaseio.com",
  storageBucket: "<BUCKET>.appspot.com",
  messagingSenderId: "<SENDER_ID>",
});
```
Add google authentication in the database>authentication tab, and scroll down and add local host
install the https://www.npmjs.com/package/firebase-tools
From the CLI run
```
firebase serve
```
You will have to sign in with your firebase console account, and now you'll be able to test update the client js webpage on localhost to talk to your firebase.

### For development I recommended a watcher
from root run
```
webpack -w
```
Any changes to the files will automatically get reloaded. Don't spend too much time on the UI, get your model completed. Then you can use hot reload to tweek your UI




Copyright 2017 Elliott Marshall

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
