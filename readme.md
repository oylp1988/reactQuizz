1. package included: webpack, webpack-cli, webpack-merge (used to easily configure the dev and prod env)
2. add gitingore file
3. add sass-loader, babel, html-webpack-plugin, react, react dom and configure them in webpack and babel configure files.
4. webpack is for bundling files and babel is for compiling the syntax

description
1. MainFrame component is the container component and all the rest in the component fold are UI components. Business logic only exists in the contain component.



ToDoList
1. it is not efficient to use localstorage, since manipulating the rows (object arrays) needs to stringfy and parse the JSON string, we should use indexDB instead.
Since it is just a Demo, I am using localstorage here.
2. When add an item, Should we clear the search text and dispatch the ClearText action?