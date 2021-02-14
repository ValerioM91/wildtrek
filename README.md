A landing page for a fictional tuor operator, created with React and Material-ui.

The most interesting and challenging part of this project was its reviews slider.

I created it first creating a data.js file containing an array of objects - reviews. 
Then, inside the slider component, I used the useState hook to set to the state the index.
Then, to display the reviews, I used the map method with a function that compares the index of the review with the index inside the state.
This comparison sets some data that are passed to the Review component as props.

The Review component has some logic inside that sets its CSS property based on the data received as props.

