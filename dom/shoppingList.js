/*
    Do the following steps in this file, and make sure this file is linked to the shopping-list.html file
    1. Create three variables that hold references to the following elements &lt;ul&gt; &lt;input&gt; &lt;button&gt; elements.
    2. Create a function that will run in response to the button being clicked.
    3. Inside the function body, start off by storing the current value of the input element in a variable.
    4. Next, empty the input element by setting its value to an empty string — ''.
    5. Create three new elements — a list item (&lt;li&gt;), &lt;span&gt;, and &lt;button&gt;, and store them in variables.
    6. Append the span and the button as children of the list item.
    7. Set the text content of the span to the input element value you saved earlier, and the text content of the button to 'Delete'.
    8. Append the list item as a child of the list.
    9. Attach an event handler to the delete button, so that when clicked it will delete the entire list item it is inside.
    10. Finally, use the focus() method to focus the input element ready for entering the next shopping list item.
*/

const unorderedList = document.querySelector('ul');
const inputContent = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    let currentInput = inputContent.value;
    inputContent.value = "";
    const newListItem = document.createElement('li');
    const newSpan = document.createElement('span');
    const newBtn = document.createElement('button');
    newListItem.appendChild(newSpan);
    newListItem.appendChild(newBtn);
    newSpan.textContent = currentInput;
    newBtn.textContent = 'Delete';
    unorderedList.appendChild(newListItem);
    newBtn.addEventListener('click', function() {
        unorderedList.removeChild(newListItem);
    })
    inputContent.focus();
});

