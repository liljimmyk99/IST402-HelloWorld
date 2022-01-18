### Open package.json and look at the scripts devDependencies and dependencies sections. What do you think each section does here? What commands can you run? ###
- devDependencies lists a series of programs, on which the project relies, to run properly. The "dev" in this denotes that these programs are mainly used for developing the project.
- dependencies does the same as devDependencies, but these programs are not required for developing the application.
- The commands that can be run are: 
    - "analyze": "cem analyze --litelement",
    - "start": "web-dev-server",
    - "lint": "eslint --ext .js,.html . --ignore-path .gitignore && prettier \"**/*.js\" --check --ignore-path .gitignore",
    - "format": "eslint --ext .js,.html . --fix --ignore-path .gitignore && prettier \"**/*.js\" --write --ignore-path .gitignore",
    - "test": "web-test-runner --coverage",
    - "test:watch": "web-test-runner --watch",
    - "storybook": "npm run analyze && web-dev-server -c .storybook/server.mjs",
    - "storybook:build": "npm run analyze && build-storybook"
  
### The "demo" for your hello-world element is found in index.html. Reading this code, what does it do and how does it work? What HTML is making your script load to show a demo? How is this file rendering HTML via JavaScript? ###
- It imports lit and the hello-world.js modules, using lit to render the HTML placed in the render() function on the page. This HTML includes a tag, hello-world, which was created in the hello-world.js file.
- render( ... document.querySelector('#demo');); loads the script to show a demo
- The file is rendering HTML via JavaScript by using lit's JavaScript render() function, which allows you to pass HTML into it.
### The Definition of your element is in your-element-name.js, while the class JS object is found in src/YourElementName.js. Why do you think they put these in two separate files? What do you think each code block is doing in the class'ed object? Leaving comments either in the source via // or in your ###
- These are put into separate files to ensure that the tag can be properly imported and interface with lit. 
- Added comments to HelloWorld.js file.

### Try to explain what Lit is providing to the repo. What's so special about what Lit is providing that I'd be so bold to say it changes how the web is developed, forever?  ###
- Lit provides the template, flexibility, and functionality to quickly create and modify custom elements. In our project, that included creating the element's properties, styling it with CSS, rendering its HTML, and generating a tag so it could be quickly implemented elsewhere.
