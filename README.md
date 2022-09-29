# Frontend Mentor - In-browser markdown editor solution

This is a solution to the [In-browser markdown editor challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/inbrowser-markdown-editor-r16TrrQX9). Frontend Mentor challenges help you improve your coding skills by building realistic projects. 

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Create, Read, Update, and Delete markdown documents
- Name and save documents to be accessed as needed
- Edit the markdown of a document and see the formatted preview of the content
- View a full-page preview of the formatted content
- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Use localStorage to save the current state in the browser that persists when the browser is refreshed
- Perform all functionalities by using shortcuts.

### Screenshot

![screenshot of the app](./screenshot.png)

### Links

- Live Site URL: [ledminh-markdown-editor](https://ledminh-markdown-editor.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [UUID](https://www.npmjs.com/package/uuid) - create unique ID for your data
- [Marked-React](https://www.npmjs.com/package/marked-react) - simplest way to transform markdown text in React.
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [SASS](https://sass-lang.com/) and CSS Module - For styles
- [Netlify](https://www.netlify.com) - For hosting

### What I learned

#### Make textarea grow with text

This is a small trick I learned while building this app:

There are three ways to achieve this goal, but in my opinion, the best way is using javascript.
- Set its height to an empty string (don’t set it to 0px like some suggestions you might find on stackoverflow). If you don’t do this step, textarea’s height will grow each time you enter something. 
- Set its height to scrollHeight + some margin.
- Set its parent element’s overflow-y to hidden.

The last two steps solve the problem of scrollbar flickering each time user enters something that will overflow the old height value.

Here is my code from [components/TextArea/index.tsx](./components/TextArea/index.tsx)

```ts
  onChange={(e) => {                
                        if(textAreaRef.current){
                            setContent(textAreaRef.current.value);
    
                            textAreaRef.current.style.height = '';
                            textAreaRef.current.style.height = textAreaRef.current.scrollHeight + 8 + 'px';
                            
                        }
    
                    }}
```

#### Naming new files

In Windows (or in any OS nowadays), right after you click a button to create a new file and before you give it a name, most likely its temporary name will be something like “new-file”, or ‘new-document’. If ‘new-file’already exists, the name will probably be ‘new-file-1’. If ‘new-file-1’ is already exists, ‘new-file-2’ will be chosen. 

I decided to add this feature to my app, with some modifications. When user created a new file but haven't saved it yet,its name will be 'new-file.md'. If there are 3 new files that has not been saved yet, their names will be 'new-file-1.md', 'new-file-2.md', 'new-file-3.md'. If user deletes 'new-file-2.md', the next new file will be named 'new-file-2.md' and the one created after that is 'new-file-4.md' 

To implement this idea, I created a counter object that has 2 functions: getIndex and markRemove. Internally, it has an array of booleans. Each time a 'new-file-(i).md' is deleted, markRemove will be called to set the ith element of the array to false. Each time a new file is created, getIndex will be called and return the index of the first false element of the array. If all array's elements are true, getIndex will return the array's length.

The implementation is in [useData/counter.tsx](./useData/counter.tsx)

### Continued development

If I have time to improve this app (hopefully I will), I will make it become a full-stack app by adding login feature and let register user save documents in database.


## Author

- Website - [ledminh.dev](https://www.ledminh.dev)
- Frontend Mentor - [@ledminh](https://www.frontendmentor.io/profile/ledminh)
- Twitter - [@MinhLe](https://twitter.com/MinhLe29056419/)