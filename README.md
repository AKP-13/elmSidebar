# elm Sidebar Code Challenge

## Task

-   To replicate the sidebar from the gif below.
    ![Desired outcome](CodingChallenge.gif)

## Installation

-   Fork and clone this repo
-   `cd elmSidebar`
-   `npm install`
-   `npm start`

## Technologies

-   React
-   Bootsrtap
-   iconify

## Future Features

#### Styling

-   One thing that I didn't manage to replicate in a neat and visually pleasing way was how the longer titles of each sidebar link faded so nicely into place upon the sidebar's expansion

    -   I had the idea to have them there constantly but with no opacity and then fade them into view upon the sidebar's expansion but I wanted to find a way that was a bit neater and didn't result in unused but still rendered content

-   Spin the settings logo upon sidebar expansion
-   Only highlight the tag icon as opposed to the longer text / shop name when you've clicked on that link

#### Dropdowns

-   Completely redesign the dropdown
    -   Possibly a custom built one for more control
-   Position the dropdown toggle triangle to the left of each client link
-   Replicate the effect in the gif whereby upon toggle, the dropdwon items appear inline as nested list items
-   Hide the dropdown menu when you move your mouse away from it

#### Code Refactor

-   I'd like to make the code more DRY and future-proof by making use of an array that I map over to render each client link
    -   I will do this by having an array of client shop names and then mapping over each element
        -   The `href` attribute for each subsequent `NavLink` would be `element.toLowerCase()` (removing any punctuation also)
        -   The two letter abreviation in each circle could be achieved by `element.substring(0, 2)`

#### Testing

-   Implememnt testing

#### Mobile Responsiveness

-   Flip the sidebar around to become a more traditional nav bar at a certain screensize
