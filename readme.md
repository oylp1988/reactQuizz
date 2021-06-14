1. package included: webpack, webpack-cli, webpack-merge (used to easily configure the dev and prod env)
2. add gitingore file
3. add sass-loader, babel, html-webpack-plugin, react, react dom and configure them in webpack and babel configure files.
4. webpack is for bundling files and babel is for compiling the syntax

description
1. MainFrame component is the container component and all the rest in the component fold are UI components. Business logic only exists in the contain component.
2. I did not spend too much time on the style design, so the UI looks coarse. When you run the app, pls take a look at the console in the dev-tool.



ToDoList
1. it is not efficient to use localstorage, since manipulating the rows (object arrays) needs to stringfy and parse the JSON string, we should use indexDB instead.
Since it is just a Demo, I am using localstorage here.
2. When add an item, Should we clear the search text and dispatch the ClearText action?

feature implemented
1. use the custom hook useDebouncedValue to throttle the user input event.
2. use the searchText as the search pattern to give user a hint of the search options. This part is not fully implemented since I could not use a third party UI lib.
   usually, the found match result could be used as the options in the Select tag of antd. Please check my comment in SearchInput.js