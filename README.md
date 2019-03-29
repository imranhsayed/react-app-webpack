# react-app-webpack

## Code Splitting with React Loadbles

Lets look at src/App.js
If we import About from ‘./components/About’ at the top of the file, it will load that component at the time of page render and make our initial page load large. We want this component to be loaded only when user click on the about link.
So what we are doing here is that instead of importing it at the top we are importing it dynamically using Loadable.

What Loadable() will do is it will only return import( './components/About’ ) when someone hits that route url ( when the component is mounted in the DOM ) . It gives us an ability to display any message ( e.g. loading message ) untill the Component is being imported by passing that information inside loading(). And ‘loader’ is where we define which component we want to import.

 The difference between import at the top and the one inside the Loadable() down below is that
the import statement at the top isn't a function invocation, its a module declaration. Its static and
you cannot use variable on top. So you can statically analyze your bundles. But the import() is a function.
So its dynamic and will split out About component into a separate component.
