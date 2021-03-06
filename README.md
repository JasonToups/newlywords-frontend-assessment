# Jason Toups - FrontEnd Assessment for Newlywords

The exercise called for creating a button and opening a modal.

Here is the [Figma Mockup](https://www.figma.com/file/FEz10wy2GzzAsTJ7aVfvgZ/Newlywords-Modal-Mockup) that was provided.

## UX

- The user clicks the **Open Modal** button, then a _Modal_ appears.
- When the user clicks the **close** button, the Modal should _disappear_.
- If the user clicks outside of the Modal, the Modal should disappear.
  - The prototype did not include this interaction, but it follows modal best practices, so I included this.

Here is the [Figma Prototype](https://www.figma.com/proto/FEz10wy2GzzAsTJ7aVfvgZ/Newlywords-Modal-Mockup?scaling=min-zoom&node-id=1%3A134)

## Button

![button screenshot](./public/screenshot-button.png)

Since I used React for the exercise, I decided to use a _reusable_ **Button** component to open the Modal, and for the Next button on the modal.

```javascript
const Button = ({ text, onClick }) => {
  return (
    <button className='button' onClick={onClick}>
      {text}
    </button>
  );
};
```

I passed props into the Button for the text displayed inside the button.

I'm also passing an onClick prop, so the button can be reused for different events. When using the Button component, pass an onClick function into the prop, and the Button will call that function when it has been clicked.

```javascript
<Button text='Open Modal' onClick={handleClick} />
```

The handleClick function takes the value of show in state and sets the opposite `true/false` value to state.

```javascript
const handleClick = () => {
  setShow(!show);
};
```

To style the button, I used the google font [Assistant](https://fonts.google.com/specimen/Assistant) as showin in the mockup.

> I would like to mention that the screenshots for the Button has a default button border style, which is not included in the final project. Since I updated the styling of the button to include `border-style: none` after I took the screenshots.

Since I wanted this button to be reuseable, I set the min-width to the width of the button in the mockup.

This way the Button component would _accommodate any amount of text_ shown within.

![button wide screenshot](./public/screenshot-button-wide.png)

## Modal

![modal](./public/screenshot-modal.png)

### Building the Modal

I took the same reusable approach for the Modal componant as I did for the Button componant, by passing props into the component, this can be reused across the site.

```javascript
const Modal = ({
  modalGraphic,
  header,
  body,
  buttonText,
  close,
  onClickOutside,
}) => {
```

Since the only interaction needed for this modal is to close it, I included a _close_ prop that can be used to close the modal.

> I _did not include_ a Button onClick parameter, since the prototype did not call for it. But something I would add to the Modal, would be to either pass a child Button component into it, or to pass an onClick parameter into the Modal.

I wanted to add an interaction where the user clicks away from the Modal and the Modal closes, where I could have just added an `onClick` event handler to the `modal-background`, but I wanted experience working with `useRef` and passing a callback function into the component while using the _React Hooks_ for `useClickOutside`.

```javascript
//Modal Component Continued...
const useClickOutside = (ref, callback) => {
  const handleClick = e => {
    if (ref.current && !ref.current.contains(e.target)) {
      callback();
    }
  };
  useEffect(() => {
    document.addEventListener('click', handleClick);
    return () => {
      document.removeEventListener('click', handleClick);
    };
  });
};
const clickRef = useRef();
useClickOutside(clickRef, onClickOutside);
```

I placed the `ref` on the `modal` div, so that if the user clicks _outside of the modal_, the user will be clicking on the parent modal-background div that stretches to the entirety of the screen width and height.

```javascript
//Modal Component Continued...
return (
    <div className='modal-background'>
      <div className='modal' ref={clickRef}>
        <img
          src={modalClose}
          className='modal-close'
          alt='close'
          onClick={close}
        />
        <img src={modalGraphic} className='modal-graphic' alt='logo' />
        <h1>{header}</h1>
        <p>{body}</p>
        <img src={modalDotGroup} className='modal-dot-group' alt='dots' />
        <br />
        <div className='modal-button'>
          <Button text={buttonText} />
        </div>
      </div>
    </div>
  );
};

```

### Using the Modal

In the `App.js` file, here's the show _ternary operator_ that shows the Modal if show in state is set to `true`.

```javascript
{
  show ? (
    <div className='modal-background'>
      <Modal
        modalGraphic={modalGraphic}
        header="Let's get going!"
        body='Follow these tips to get your project off to a great start and create a fully memorable book!'
        buttonText='Next'
        close={handleClick}
      />
    </div>
  ) : null;
}
```

### Styling the Modal

When styling the Modal, I used fixed positioning and transform to center it on any screen size:

```css
position: fixed;
left: 50%;
top: 50%;
transform: translate(-50%, -50%);
```

I used `min-height: 529px`, so that if the text in the body exceeds the three lines shown in the mockup, the Modal will grow vertically to accommodate the text.

![modal large](./public/screenshot-modal-large.png)

If the screen is narrower than 480px, then the Modal will fill up 100% of the available screen space, which could account for Modals on mobile screen sizes.

```css
width: 480px;
max-width: 100%;
```

![modal mobile](./public/screenshot-modal-mobile.png)

## Graphics

I _exported the graphics_ from the Figma mockup as **.svg**, and included them in the project for the **close** icon, the modal **graphic** and the modal **dots**.

---

## Running the Project

I used Create React App, so just clone the repo, and run:

```
yarn start
```

The project will run on [http://localhost:3000/](http://localhost:3000/)

To create a build:

```
yarn build
```

To run the build from the build folder:

```
yarn global add serve
serve -s build
```

The build will run on [http://localhost:5000](http://localhost:5000)

---

# Contact

Connect with me on [LinkedIn](https://www.linkedin.com/in/jasontoups/).

Take a look at my [portfolio](https://jasontoups.github.io/) to see some examples of my work.

Checkout my [GitHub profile](https://github.com/JasonToups) to see what I've been working on recently.

If you would like to see my work history, here is my [resume](https://docs.google.com/document/d/1koaqjOgaks8QpRmC1oR1Wt6XSJJ_Woj40uLOFUwXjzA/edit?usp=sharing).
