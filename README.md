# FancyGrid-React

*A React Component for FancyGrid*

Quickly create dynamic JavaScript grids that react when your data changes by utilizing the FancyGrid library and Facebook's React together.

## Resources:
* Want to see the application running? See our [sample repo](https://github.com/FancyGrid/FancyGrid-React-Seed)
* [Docs](https://fancygrid.com/docs/)
* [Support](https://fancygrid.com/support/)

## Quick Start

### Install
```
npm install fancygrid-react
```

### Usage

This component is dependent upon React and the FancyGrid library. The module uses the CommonJS specification and can be included in your application with bundling tools such as browserify and webpack. 

---

The FancyGrid-React Component exposes 3 components.
* `Grid`
* `Form`
* `Tab`

### Components
All components are wrappers around the entire widgets of FancyGrid.  
The only one property is config with widget options.  

```html
<!--HTML-->
<div id="container-grid"></div>
<div id="container-form"></div>
<div id="container-tab"></div>
```

```js
//JavaScript
var Grid = require('fancygrid-react').grid;
var Form = require('fancygrid-react').form;
var Tab = require('fancygrid-react').tab;
var gridConfig = {
  ...
};

var formConfig = {
  ...
};

var tabConfig = {
  ...
};

ReactDOM.render(
  <Grid config={gridConfig} />,
  document.getElementById('container-grid')
);

ReactDOM.render(
  <Form config={formConfig} />,
  document.getElementById('container-form')
);

ReactDOM.render(
  <Tab config={tabConfig} />,
  document.getElementById('container-tab')
);
```


## Build

This component uses gulp to transform React JSX files and combine the rest of the JavaScript files into one single file.

###Usage

`gulp dev` - Builds the unminified version as /dist/fancygrid-react.js

`gulp prod` - Builds the minified version as /dist/fancygrid-react.min.js

This build tool **does not** require all dependent libraries (FancyGrid and React) in the production file. It allows the user to use any bundling tool they choose such as browserify or webpack.