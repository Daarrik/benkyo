# Benkyo

### About

<b>Benkyo</b> is a React Native application for studying the readings of Japanese words, built specifically for Android. Benkyo is a passion project (and final project for CS 4750) written in two weeks, and as such there are several messy parts to its code which I plan to clean up in the ~~near~~ future.

### How to Run

I started this project knowing close to nothing about React Native, but a solid background in React. I was unaware of tools like Expo and as such wrote Benkyo using the `npx` commands. I am not sure how building the app in an Expo environment would work for those of you more experienced than I am.

First follow the development environment setup for React Native [here](https://reactnative.dev/docs/environment-setup).

1. `npm install` or `yarn` (or both for all I know)

2. In a terminal: `npx react-native start`

3. In a separate terminal: `npx react-native run-android` (I have never tested the app on iOS)

### To-Do

1. Database for storing words and their readings outside of memory

2. Useful study application features like number of times correct/incorrect

3. Clean up code eyesores
