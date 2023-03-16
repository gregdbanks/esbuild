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
