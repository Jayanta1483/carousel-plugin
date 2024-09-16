# carousel-plugin



##### Installation

```powershell
npm i carousel24
```



1. After installation is complete then link your `npm` package to your document. 

2. Next place   `<carousel-component></carousel-component>` [ it is a custom web component] inside your HTML document with id attribute `carouselHost`. 

Example:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="./node_modules/carousel24/dist/index.js" defer></script>
     <script src="./index.js" type="module" defer></script>
    <title>Document</title>
</head>
<body>
   <carousel-component id="carouselHost"></carousel-component>
</body>

</html>
```

3. Now the package provide two functions -- `carouselSetup` [ for initializing ] and `initiateAutoSlide`.

Example:

```javascript
const { carouselSetup, initiateAutoSlide } = Carousel;

const options = [
    { imageUrl: '../imgfile', text: '...'},
    { imageUrl: '../imgfile', text: '...'},
    { imageUrl: '../imgfile', text: '...'}
]
carouselSetup(options);

initiateAutoSlide(); // for adding auto slide feature
```

4. If no options are provided then it will run on default slides and text. Maximum five images can be provided. Providing text for each screen is optional.