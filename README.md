# App Component

The `App` component is a React component that uses the `esbuild-wasm` package to transpile JSX and ES2015+ code into a lower ECMAScript version, allowing users to input code and view the transpiled output.

## Features

- Users can input JSX or ES2015+ code in a textarea
- Transpiles code using the `esbuild-wasm` package
- Displays the transpiled code on the page

## Usage

To use the `App` component, simply import it and render it as part of your React application.

```jsx
import App from "./App";

function MyApp() {
  return (
    <div>
      <App />
    </div>
  );
}

export default MyApp;
```

### Component Breakdown

1. **State management**: Two state variables, `input` and `code`, are used to store the user's input and the transpiled code, respectively.
2. **esbuild service**: A ref is used to store and manage the `esbuild` service.
3. **Event handlers**: Two functions, `handleSubmit` and `handleInput`, are defined to handle user input and code transpilation.
4. **useEffect**: A `useEffect` hook is used to start the `esbuild` service when the component is mounted.
5. **JSX**: The component renders a textarea for user input, a submit button to trigger code transpilation, and a preformatted text block to display the transpiled code.

## Example

1. Input JSX code in the textarea:

```jsx
const HelloWorld = () => {
  return <h1>Hello, World!</h1>;
};

ReactDOM.render(<HelloWorld />, document.getElementById("root"));
```

2. Click the "Submit" button.
3. The transpiled code will be displayed in the preformatted text block:

```javascript
var HelloWorld = function () {
  return React.createElement("h1", null, "Hello, World!");
};

ReactDOM.render(
  React.createElement(HelloWorld, null),
  document.getElementById("root")
);
```
