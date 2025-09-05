# Rainbow Angles

A website highlighting good angles on ranked maps of Rainbow Six Siege.

## How to use

From the homepage scroll down to the maps section and click on the map that you would like to see angles for.
Scroll down to the image carousel. To navigate the image carousel you can click the arrows on the left and right of the carousel or click on the dots beneath it to navigate
to a particular image. You may also quickly navigate to the beginning of a particular floor by selecting the floor on the right hand side of the page above the text box if
you're on desktop, or above the image carousel if you're on mobile.

## How to add more maps

If you'd like to develop for the project and add additional maps, you can do so in App.js by adding a new `<Route>` to the return statement there. The `<Route>` will require
a path attribute that looks like `path="/mapName/"` where mapName is the name of the map. The `<Route>` will also require a render attribute that looks like
`render={() => <MapGuide />}`.

### `<MapGuide />`

`<MapGuide />` takes several props:

#### header

A string representing the name of the map to display

#### headerImage

The image to display for the map

#### floorNames

An array of strings representing the floor names

#### floorStartingIndices

An array of integers representing which indices of the images array the next floor starts on (excluding index 0 since the bottom floor always starts at index 0).

#### images

A two dimensional array of images in the form images[angleIndex][imageIndex] where angleIndex is the index of the angle being shown and imageIndex is the particular
image for that angle.

#### text

An array of strings describing the angle being discussed at text[angleIndex] where angleIndex is the index of the angle being shown.

## Commands

### `npm install`

Installs all dependencies.

### `npm start`

Sets up the development environment as well as starts a server.

### `npm predeploy`

Builds the project.

### `npm deploy`

Deploys the project to github pages.
