# Breadcast

### Description
This is a sample mobile application which acts as a social community platform for Breadfast users, through displaying text-based posts and comments.
The API used for the posts is https://gorest.co.in/

Since the API doesn't containuser information inside posts, I've used a hash-dependent avatar generator for the user avatars, and used the user ids as names.


### To run this app:

- Make sure you have the environment setup correctly. Guide can be found here: https://reactnative.dev/docs/environment-setup
- Clone this repo.
- Run `yarn install` in the repo directory
- Run this command to install pods for iOS `cd ios && pod install && cd ..`
- To run iOS: `npx react-native run-ios`
- To run Android: `npx react-native run-android`


### App Screenshots

<img src="https://user-images.githubusercontent.com/36399893/220489080-c28f2273-89d6-48e2-b571-4c93dcb7b66d.png" width="350">
<img src="https://user-images.githubusercontent.com/36399893/220489108-b4cbb92e-fb0b-47ff-84eb-41cecc3b9ff8.png" width="350">


### Possible Improvements
- Pagination
- Using context for saving and passing posts
- Pull to refresh
- Custom font
- Loading indicators
- Further component UI breakdown
- Adding Tests
