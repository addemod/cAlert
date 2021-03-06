![gif_top](https://i.gyazo.com/bfe03fd9cfad0144d1ff4a24391f186d.gif "The Alerts!")

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
cAlertTest.queue();
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
<i class="icon-github"></i>
```
Result: ![icon_result](https://i.gyazo.com/6f3bbf18cd56a32a8d36620df8b63be0.png "Icon usage result")

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

* ``` cAlert.alert() ``` - Show the alert (Not recommended. Instead, use ***queue()***)
* ``` cAlert.queue() ``` - Queue the alert, it will be displayed when it's the first in the queue (Recommended use)
* ``` cAlert.dismiss() ``` - Dismiss the alert manually (animation)
* ``` cAlert.remove() ``` - Remove the alert manually (no animation)
* ``` cAlert.onalert = function() {} ``` - Called on cAlert.alert()
* ``` cAlert.onalertdone = function() {} ``` - Called when the show animation is done
* ``` cAlert.ondismiss = function() {} ``` - Called when the alert is being dismissed
* ``` cAlert.ondismissed = function() {} ``` - Called when the dismiss animation is done
* ``` cAlert.onclick = function() {} ``` - Called when the alert box is clicked
* ``` cAlert.onremove = function() {} ``` - Called when the alert box is removed
