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
-   Bootstrap
-   iconify

## Future Features

#### Styling

-   One thing that I didn't manage to replicate in a neat and visually pleasing way was how the longer titles of each sidebar link faded so nicely into place upon the sidebar's expansion

    -   I had the idea to have them there constantly but with no opacity and then fade them into view upon the sidebar's expansion but I wanted to find a way that was a bit neater and didn't result in unused but still rendered content

-   Spin the settings logo upon sidebar expansion
-   Only highlight the tag icon green as opposed to the longer text / shop name when you've clicked on that link

#### Dropdowns

-   Completely redesign the dropdown
    -   Possibly a custom built one for more control
-   Position the dropdown toggle triangle to the left of each client link
-   Replicate the effect in the gif whereby upon toggle, the dropdwon items appear inline as nested list items
-   Hide the dropdown menu when you move your mouse away from it

#### Code Refactor

-   I'd like to further improve the `arrayOfClients.map` functionality so that I can cater for nested objects and the non-client links in the sidebar

#### Testing

-   Implement testing

#### Mobile Responsiveness

-   Flip the sidebar around to become a more traditional nav bar at a certain screensize
