# cx_strength_and_balance

# Prerequisites and Dependencies
All commands should be run in Terminal, from the root directory.

## Initial setup

* sudo gem install cocoapods
* npm i

## Running the app in simulators

### iOS
Download and install Xcode from the AppStore.

In Terminal (root):
* cd ios/
* pod install
* cd ..

react-native run-ios

### Android
Download and install [Android Studio](https://developer.android.com/studio),
Run Android Studio, download and enable an appropriate SDK (Pixel 2 is standard)

In Terminal, run the following commands in the project root directory:

* export ANDROID_HOME=$HOME/Library/Android/sdk
* export PATH=$PATH:$ANDROID_HOME/emulator
* export PATH=$PATH:$ANDROID_HOME/tools
* export PATH=$PATH:$ANDROID_HOME/tools/bin
* export PATH=$PATH:$ANDROID_HOME/platform-tools

react-native run-android

*Note: If the android build fails, try running the above in terminal once more and attempt to build again*

## Issues with Running Build
If the app won't build after completing the above steps, try manually installing the required dependencies:

* npm install -—save react-native-navigation
* npm install @react-navigation/native
* npm install @react-navigation/stack
* npm install react-native-reanimated react-native-gesture-handler react-native-screens react-native-safe-area-context @react-native-community/masked-view
* react-native link react-native-navigation

ToDo:
Add commands to fix build issues with pod library

# Useful Tutorials for React Native
[React Native Crash Course 2020](https://youtu.be/Hf4MJH0jDb4)  
A great starting point if you're completely new to React Native. Introduces functional components and hooks. Also details how to correctly set up your iOS and Android emulators.

[React Navigation Docs](https://reactnavigation.org/docs/getting-started/)  
A good starting point for getting to grips with the ins and outs of react navigation. I'd recommend stopping after completing "Configuring the header bar" and use the next resource in this section to tie everything together.

Off the back of this, I'd like to add a resource that I found useful for re-rendering the same screen. If you want to have one component screen that changes depending on data that you pass through, this is the link for you. It's use can be found in the exercise page of the app. [navigate.push](https://reactnavigation.org/docs/params/)  ~Grant

[Getting Started with React Navigator](https://heartbeat.fritz.ai/getting-started-with-stack-navigator-using-react-navigation-5-in-react-native-and-expo-apps-4c516becaee1), Aman Mittal  
**Important** *Do not follow the instructions for Requirements and Install Dependencies, skip to Create Mock Screens.*  
This tutorial will teach you how to use React Navigation in a practical way, with components.

[Official React Docs](https://reactnative.dev/docs/getting-started)  
Invaluable resource for learning about specific inbuilt React components.



# Useful Tutorials for Firebase 
[Firebase Tutorial With React Hooks](https://www.youtube.com/watch?v=rSgbYCdc4G0)

Really all you need to know. 
It's lengthy and in depth - in a good way
It walks you through the api calls, how to use the console for CRUD functionality (also how to write it in code if need be).
This is the main tutorial used for the project - however I'll provide additional ones below that may or may not come in use in the future. 



[React Firebase Realtime Database](https://www.youtube.com/watch?v=e1Cm-jj0CG4)  
[Firebase Realtime database docs](https://firebase.google.com/docs/database/?authuser=0) 


## Firebase Cloud Storage
For the purposes of this app, I didn't go through any tutorial - everything was done using the Firebase console. 
To use the Firebase cloud storage, it works almost like any other popular storage service. 
You can upload files using the upload button, place files in folders and structure them as you see fit. 
If you want to get the public download link of a file:
* Click on the desired file
* On the right hand side, click 'file location'
* Click 'Access Token'
This should copy the link to your clipboard and you put it where you see fit. 

## Firebase notes

The app is setup in such a way that the exercise data - name, steps, image, etc - is all hosted in the Firebase realtime database. The images are confusinly not stored in the database itself, but rather the url is just manually copied and pasted from cloud storage into the appropriate field of the exercise. This means that if the app owner - PathsForAll - decide to add another exercise, or change one at a later date it can be done with no involvement from a dev. 

# Adding a new exercise to the app

* Log on to the PathsForAll google account at [Firebase](https://console.firebase.google.com/)
* Select the Strength and Balance App project
* Choose database on the left hand dashboard
* Click on 'exercises'
* Choose 'Add document'
  * Hit auto-id
  * Enter into the field section a description of what you are adding (make sure it's lowercase and matches the existing fields of other documents) - i.e. title, step1, etc

To add images to the document:
* Click on storage on the left hand dashboard
* Click on the desired file
* On the right hand side, click 'file location'
* Click 'Access Token'
* Click on Database from the left hand dashboard
* Choose the document that you want to add the image to
* Click 'Add field'
  * Give the field name 'url' (minus the brackets)
  * Choose array from the type drop down 
  * Paste the url into the value field
  
Make sure that you place three images into the url field, otherwise the app will break (it expects three)







