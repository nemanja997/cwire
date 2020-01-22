# App documentation

## Idea

The tinder UI looked as the best solution having in mind that it ensures feedback for every property that the user has seen.
<br>

The idea was to have first card that is really swipable and to show 2 more cards in the background to illustrate "stack of cards".
I used css transitions to bring seamlessly "bottom cards" to top when the first one is swiped.

Cards had one image of property, price placed as a ribbon around card to be more noticeable and basic information about the property. Also, there is a button that leads to **detailed view** of the property that have all available images and data.

You can get back to previus **Home view** (where swiping cards are) with the arrow that is always fixed on the top left corner of the page. By going back you return to the last state of your "card stack", meaning that the property you looked in detailed view will be again on top so you can react to it.

The swipe left action means **dislike** and the swipe right means **like**, clicking on details for the property means **interested**.

After **interested** user can go back to previous view and again swipe the card that he was interested in so we can see is he satisfied when he saw detailed view or not.

Every reaction is sent to the server.



I decided that filters should be in the header and strongly colored as the next most important action in the app after cards interaction.<br>
As the user search for filtered properties it is immediately stored in **localStorage** so when the user visits that page again, he will have already predefined filters from the last search.

**Loader** is shown whenever we are fetching data from the external API, which includes initial data load and when filtering properties.



## Choice of libraries

### Axios:

For easy handling AJAX requests.

### vue-slider-component:

Used a slider for filters with a range. <br>
It is easy to implement with a lot of props and event that you can use.<br>
It has easy binding with the data.

### vue-agile:

After testing a couple of carousel packages for Vue.js this one came in as the most customizable and best behaving regarding responsiveness, also it was easiest to customize its css to match the theme of the app.

### vue2-interact-draggable:

AS I decided to go with the Tinder like UI for the app I needed something that will handle draging of the cards out of the box.
This wrapper component for Vue.js is built on top of **interact.js** library.<br>
It has clear documentation and a lot of features and props so I decided that it will do the job on this app.

### vue-loading-overlay:

A simple component that I used before for adding loading indicator overlay when user is waiting for some asynchronous action to finish. <br>
On this app it is used when fetching the properties data from the API.

### font-awesome:

Used for the icons in the app.

## Could be improved:

* Smoother transition when getting a new top card.
* Adding transition when changing route views.
* Incorporate more filters
* could incorporate search by location (eg. Dropdown with list of cities in CH)
* On detailed view shorten description if its too big and give some kind of expansion option to see long description. 
* Handling images with different resolutions and aspect ratios.( difficult with current layout )
* Checking if there is a info about the property before displaying it (to not be empty)
* Rewrite some components to be more modular ( eg. PropertiesStack component)
* Better naming of components and variables

