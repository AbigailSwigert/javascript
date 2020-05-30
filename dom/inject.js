/*Exercise instructions : take the html code from the following codepen : https://codepen.io/ayunas-the-scripter/pen/WNQgpqB, and use JavaScript DOM manipulation to inject the html into the inject id element of inject.html
*/
const divText = document.getElementById('inject');

const center = document.createElement('center');
divText.appendChild(center);
const heading1 = document.createElement('h1');
center.appendChild(heading1);
const italics = document.createElement('i');
heading1.appendChild(italics);
italics.textContent = 'HTML Practice Exercise TEKcamp.'
const heading2 = document.createElement('h2');
center.appendChild(heading2);
const link = document.createElement('a');
heading2.appendChild(link);
link.textContent = 'TEKsystems "TEKcamp"';
link.setAttribute('href', '');


const horizontalRule1 = document.createElement('hr');
divText.appendChild(horizontalRule1);

const para1 = document.createElement('p');
divText.appendChild(para1);
para1.innerHTML = 'I love <i>HTML</i> for the following reasons:'

const orderedList = document.createElement('ol');
divText.appendChild(orderedList);
const listItem1 = document.createElement('li');
orderedList.appendChild(listItem1);
listItem1.textContent = 'I learned it quickly.';
const listItem2 = document.createElement('li');
orderedList.appendChild(listItem2);
listItem2.textContent = 'I can make web pages using code.';
const listItem3 = document.createElement('li');
orderedList.appendChild(listItem3);
listItem3.textContent = "It's fun.";

const horizontalRule2 = document.createElement('hr');
divText.appendChild(horizontalRule2);

const para2 = document.createElement('p');
divText.appendChild(para2);
para2.innerHTML = 'My instructor’s email address is: '
const emailLink = document.createElement('a');
emailLink.href = 'mailto:ayunas@teksystems.com">ayunas@teksystems.com';
emailLink.textContent = 'ayunas@teksystems.com.'
para2.appendChild(emailLink);

const heading3 = document.createElement('h1');
divText.appendChild(heading3);
heading3.textContent = 'Have a great day!';

const para3 = document.createElement('p');
divText.appendChild(para3);
para3.textContent = 'I really look forward to learning how to code!  Have a great day. -[Team "V8"]'