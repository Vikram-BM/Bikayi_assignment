Bikayi Assignment-Frontend
You have to make an app to showcase nobel prize winners for the last 100
years.
- The data is available here : http://api.nobelprize.org/v1/prize.json
- You can paste the data here https://jsonformatter.curiousconcept.com/
to see the data in a formatted way.
- The data is a list of prizes and each prize contains the following
information
- Which year was the prize won in
- Category
- Motivation
- Laureates (who won the prize : can be multiple per prize)
- Each Laureate follows the following structure
- Id (unique id)
- First name
- Sur name
- You can ignore the extra fields which are present in the json
Tasks
1. Write a function to fetch prizes from the url
2. Showcase the prize winners in a list. You can decide the layout and style.
You have to display each prize and who has won that prize
3. You should add dropdown to filter prizes by category and year.
4. Year should be between 1900 - 2018, you can find out the category
yourself by iterating over the data.
5. There are 4 people who have won the nobel prize more than 1 time. You
have to make a section in the app to display their information
Requirements
1. Please test the functionalities before submitting
2. The assignment should not take more than 24 hours
3. Bonus points for good UI

Getting Started with Create React App
This project was bootstrapped with Create React App.

Available Scripts
In the project directory, you can run:

npm start
Runs the app in the development mode.
Open http://localhost:3000 to view it in your browser.

The page will reload when you make changes.
You may also see any lint errors in the console.

npm test
Launches the test runner in the interactive watch mode.
See the section about running tests for more information.

npm run build
Builds the app for production to the build folder.
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.
Your app is ready to be deployed!

See the section about deployment for more information.

npm run eject
Note: this is a one-way operation. Once you eject, you can't go back!

If you aren't satisfied with the build tool and configuration choices, you can eject at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except eject will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use eject. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

Learn More
You can learn more in the Create React App documentation.

To learn React, check out the React documentation.

Code Splitting
This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

Analyzing the Bundle Size
This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

Making a Progressive Web App
This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

Advanced Configuration
This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

Deployment
This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

npm run build fails to minify
This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify
