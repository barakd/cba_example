# Component Based Architicture Example
Simple components example based on angular tour of heroes,
Created for my talk on "[From MVC to Component Based Architecture](https://www.youtube.com/watch?v=JlyEZf4vBBY&feature=youtu.be)".
The main idea is to show a simple speration of pure & impure components, and show a basic one way data flow.
Take a look at the following files:
* [src/app/heroes/hero-detail.component.ts](src/app/heroes/hero-detail.component.ts) (example of "dumb" presnetation component )
* [src/app/heroes/hero-display.component.ts](src/app/heroes/hero-display.component.ts) (example of "smart" component passing data to the dumb component )

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.
