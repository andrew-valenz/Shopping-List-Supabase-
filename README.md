![Wire frame](./assets/)

List Page

-   incorporate our 'create' functionality

    -   form - inputs for name of the quantity and item, and submit button - append each list based on info from supabase
        -delete button to delete the whole list all at once (supabase call of that)

    1. Database Setup
        1. Make a table in Supabase
        2. Foreign key relationship to users table (uuid)
        3. Pls for user_id = uid()
    2. Create form (form)
        1. Create function in fetch-utils
        2. Add submit event listener
        3. Grab data using new FormData and send it to supabase
    3. List all items (ul)
        1. Fetch function in fetch-utils
        2. Write render function in render-utils
        3. Write display function in app.js
        4. Call display function on page load
    4. Update item
        1. (Crossing out the item)
        2. Update function in fetch-utils
        3. An event handler on our li elements (when they are rendered, we make them clickable)
        4. Call display function on page load
    5. Delete function (button)
        1. Delete function in fetch-utils
        2. Add event listener to call the delete function (on button click)
