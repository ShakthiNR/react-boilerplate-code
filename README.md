# React-Boilerplate-Code

<p>npm run build -> build the file to deploy </p>
<p>npm run start -> will render the file into browser (port 3000) (change detection added) </p>
<p>link - https://react-webpack-prod.netlify.app/</p>
<p>After deployment - Source code hidden, seperate css file</p>

<h2>Scripts:</h2>

```
    "build": "webpack --config webpack.prod.js && npm run post-build",
    "post-build": "npx copyfiles --flat ./public/_redirects build"
    "start": "webpack serve --config webpack.dev.js"

    where post-build copies _redirects file to build folder
    It is needed when refresh the page the route to redirect to index.html
```