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

### Screenshot

![screenshot](./screenshot.png)

### Links

- Live Site URL: [Ledminh-Markdown-Editor](https://ledminh-markdown-editor.netlify.app/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Next.js](https://nextjs.org/) - React framework
- [SASS](https://sass-lang.com/) and CSS Module - For styles
- [Netlify](https://www.netlify.com) - For hosting

### What I learned

#### Make textarea grow with text

This is a small trick I learned while building this app:

After two days of doing research, I figured the best way to achieve it is using javascript. 
- Set its height to an empty string (don’t set it to 0px like many suggestions you might find on stackoverflow). If you don’t do this step, textarea’s height will grow each time you enter something. 
- Then set its height to scrollHeight + some margin.
- Then set its parent element’s overflow-y to hidden.

The last two steps solve the problem of scrollbar flickering each time user enter something that will overflow the old height value.

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
In Windows (or in any OS nowadays), right after you click a button to create a new file and before you give it a name, it will be given some name like “new-file”, or ‘new-document’. If ‘new-file’ is already taken, the name will probably be ‘new-file-1’. If ‘new-file-1’ is already taken, ‘new-file-2’ will be chosen. 

I decided to add this feature to my app, with some modifications. Specifically, when you have a list of new files, from new-file, new-file-1, to new-file-n, if you delete one of them, new-file-5 for example, the next new file should be named ‘new-file-5’, and the one next to it will be ‘new-file-(n+1)’. 

To do that, I created a counter with getIndex method. When calling, the method will return an appropriate number to add to the end of the new file’s name.

The implementation is in [useData/counter.tsx](./useData/counter.tsx)

### Continued development

If I have time to improve this app (and I will), I will make it become a full-stack app by adding login feature. Logged in users can save documents in database.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Example resource 1](https://www.example.com) - This helped me for XYZ reason. I really liked this pattern and will use it going forward.
- [Example resource 2](https://www.example.com) - This is an amazing article which helped me finally understand XYZ. I'd recommend it to anyone still learning this concept.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)

**Note: Delete this note and add/remove/edit lines above based on what links you'd like to share.**

## Acknowledgments

This is where you can give a hat tip to anyone who helped you out on this project. Perhaps you worked in a team or got some inspiration from someone else's solution. This is the perfect place to give them some credit.

**Note: Delete this note and edit this section's content as necessary. If you completed this challenge by yourself, feel free to delete this section entirely.**
