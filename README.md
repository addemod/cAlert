![gif_top](https://i.gyazo.com/fd3dc36786e72c5450eef9414bc12937.gif "The Alert!")

cAlert
======
A simple JS alert system that is easy to setup and use!

Requirements
======
[JQuery](https://jquery.com/)

Usage
======
**JavaScript:**
```javascript
var cAlertTest = new cAlert("This is a cAlert box that is very clean and simple!<p>It's also responsive on all screens! Isn't that just awesome? <i class='icon-accessibility'></i>", "danger", "blocked", 2);
cAlertTest.alert();
```

**HTML:**
```html
<script src="/js/cAlert.js"></script>
<link href="/css/style.css" rel="stylesheet"/>
```
*This depends on where you place the files and if you rename them to something, obviously.*

Different styling
======
Example:
```css
.cAlert-example {
	background: rgba(109, 175, 96, 1);
	border: 2px solid rgba(84, 142, 72, 1);
	color: rgba(40, 68, 34, 1);
}
```

Icons?
======
Icons from [IcoMoon](https://icomoon.io/) are included.
Usage:
```html
<i class="icon-info"></i>
```
Result: ![icon_result](https://i.gyazo.com/0cf570a1b35dc8a5860964d98482a89c.png "Icon usage result")

Events
======
```javascript
// When the alert() function is called
onalert = function() {};
// When the alert animation from alert() is done
onalertdone = function() {};

// When the show() function is called
onshow = function() {};
// When the dismiss() function is called
ondismiss = function() {};
	
// When the alert animation from show() is finished
onshown = function() {};
// When the alert animation from dismiss() is finished
ondismissed = function() {};
	
// When the alert box is clicked
onclick = function() {};

// When the alert is removed
onremove = function() {};
```

API
======
***cAlert(body, type, icon, time) → {cAlert Object}***
* ```body``` - The alert box content (Full HTML support)
* ```type``` - The type of the alert box. This is the name of the cAlert- css class (For example "cAlert-success" would be type "success")
* ```icon``` - The icon name, check icons.html for more information
* ```time``` - The time in seconds until the alert is dismissed

Example:
```javascript
var cAlertTest = new cAlert("This is a cAlert box that is very clean and simple!<p>It's also responsive on all screens! Isn't that just awesome? <i class='icon-accessibility'></i>", "danger", "blocked", 2);
```

* ```javascript cAlert.alert()``` - Show the alert
* ```javascript cAlert.dismiss()``` - Dismiss the alert manually (animation)
* ```javascript cAlert.remove()``` - Remove the alert manually (no animation)
* ```javascript cAlert.onalert = function() {}``` - Called on cAlert.alert()
* ```javascript cAlert.onalertdone = function() {}``` - Called when the show animation is done
* ```javascript cAlert.ondismiss = function() {}``` - Called when the alert is being dismissed
* ```javascript cAlert.ondismissed = function() {}``` - Called when the dismiss animation is done
* ```javascript cAlert.onclick = function() {}``` - Called when the alert box is clicked
* ```javascript cAlert.onremove = function() {}``` - Called when the alert box is removed
