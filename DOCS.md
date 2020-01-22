# App documentation

## Idea

The tinder UI looked as the best solution having in mind that it ensures feedback for every property that user has seen.
<br>

Idea vas to have first card that is realy swipable and to show 2 more cards in the background to illustrate "stack of cards".
I used css transitions to bring seamlessly "bottom cards" to top when the first one is swiped.

Cards had one image of property, price placed as a ribbon around card to be more noticable and basic information about property. Also there is a button thast lead to **detailed view** of the property that have all awailable images and data.

The swipe left action means **dislike** and the swipe right means **like**, clicking on details for the property means **interested**.

After **interested** user can go back to previus view and again swipe the card that he was interested in so we can see is he satisfied when he saw detailed view or not.

Every reaction is sent to the server.



I decided that filters should be in the header and strongly colored as the next most important action in the app after cards interaction.<br>
As the user search for filtered properties it is emydietly stored in **localStorage** so when the user visits that page again he will have already predefined filters from last search.

Loader is shown whenever we are fetching data from the external API. (On initial load and on filtering properties)



## Choice of libraries

### Axios:

For easy handling AJAX requests.

### vue-slider-component:

Used a slider for fliters with a range. <br>
It is easy to implement with a lot of props and event that you can use.<br>
It has easy binding with the data.

### vue-agile:

After testing a couple of carousel packages for vue this one came in as the most customizable and best behaving regarding responsivenes, also it was easiest to customize its css to match the theme of the app.

### vue2-interact-draggable:

AS I decided to go with the Tinder like UI for the app I neaded something that will handle draging of the cards out of the box.
This wrapper component for Vue.js is built on top of **interact.js** library.<br>
It has clear documentation and a lots of features and props so I decidetd that it will do the job on this app.

### vue-loading-overlay:

A simple component that I used before for adding loading indicator overlay when user is waiting for some asynchronous action to finish. <br>
On this app it is used when fetching the properties data from the API.

### font-awesome:

Used for the icons in the app.

## Could be improved:

* Smoother transition when geting new top card.
* Incorporate more filters
* On detailed view shorten description if its too big and give some kind of expansion option to see long description. 
* Handling images with diferent resolutions and aspect ratios.( dificult with current layout )
* Checking if there is a info about property before displaying it (to not be empty)
* Revrite some components to be more modular ( eg. PropertiesStack component)
* Better naming of components and variables
