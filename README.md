Slidy
=====

###A simple HTML5 slide framework

##Getting Started

This project uses section to seperate slide pages.<br>
The basic structure of each page shows in below :<br>

```
<section>
  <div class="slide-inner">
    ...
  </div>
</section>
```

###Page Categories
**Title with subtitle**<br>
This format is called _.part-header_ in this project which can be used at the beginning of a section in a slide.

```
    <section class='part-header left-slide'>
      <div class='slide-inner'>
        <h1>Section Title part header</h1>
        <h2>the sub title for section</h2>
      </div>
    </section>
```
**Title only**<br>
This format is called _.title-slide_ in this project and with this format you can simply add h1 ~ h3 title to your page to create a easy title page.

```
    <section class='title-slide left-slide'>
      <div class='slide-inner'>
        <h1>...</h1>
        <h2>...</h2>
        <h3>...</h3>
      </div>
    </section>
```

**Title with one content**<br>
This format is called _.title-content_ in this project and it contents two elements in slide-inner div which is a h1 element for title and a div element for content. You can simply add image, text or even video into your slide page. 

```
    <section class='title-content left-slide'>
      <div class='slide-inner'>
        <h1>...</h1>
        <div>
          <img src='...'/>
        </div>
      </div>
    </section>
```

**Title with two content**<br>
This format is call _.two-content_ in this project which includes a title formed by h1 element and two div elements for two contents. Those two contents would stand side by side with each other. Each of those would have approximately 50% of the page width.

```
    <section class='left-slide two-content'>
      <div class='slide-inner'>
        <h1>Section Title for Two Content</h1>
        <div></div>
        <div></div>
      </div>
    </section>
```

##Animations
Add classes to the section or object that you would like to perform.

###Eyecatch Animations
####.slide-left

The slide-left is the most basic eyecatch animation. It would make current slide slide in from the right hand side and slide out toward the left hand side.

```
<section class="slide-left">
  <div class="slide-inner">
    ...
  </div>
</section>
```
###Object Animations

##Customise
###Document style

###JavaScript
##Lisence
This software is lisenced under MIT Lisence. Please check out the LISENCE file for more information.

