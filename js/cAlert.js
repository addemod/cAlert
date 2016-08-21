var cAlert = function(body, type, icon = "bubble2", time = 2) {
	
	this.type = type;
	this.body = body;
	this.time = time;
	this.icon = icon;
	
	this.id = generateUUID();
	this.elem = undefined;
	this.hideTimeout = undefined;
	
	this.alert = function() {
		// _this is to refer to the correct cAlert class, we can't access "this" inside the function inside setTimeout
		var _this = this;
		
		// Call onalert function
		if(this.onalert() === false)
		{
			return;
		}
		
		var icon_html = "";
		if(this.icon !== "")
		{
			icon_html = '<i class="cIcon icon-'+this.icon+'" type="alert-type-icon"></i>'
		}
		
		// Append the alert to the body, hidden
		$("body").append('<div class="cAlert cAlert-'+this.type+'" type="alert" id="'+this.id+'" style="display: none">'+icon_html+'<div class="cAlert-content"><p>'+this.body+'</p></div></div>');
		// Store the element of the alert
		this.elem = $("#" + this.id);
		
		// Set the alert visible and put it outside the screen
		this.elem.css("display", "").css("top", 0 - this.elem.height());
		// Move the alert into the screen by moving it down from it's first position
		$("#" + this.id).stop().animate({top:0}, 500, this.onalertdone);
		
		// Remove the alert after the entered time in seconds
		// setTimemout is in milliseconds so we have to convert the seconds entered
		if(this.time !== 0)
		{
			hideTimeout = setTimeout(function () { _this.dismiss() }, this.time * 1000);
		}
		
		// Set onclick event
		this.elem.click(function() { _this.onclick(); });
	};
	
	this.show = function() {
		// Call the onshowing function
		if(this.onshow() === false)
		{
			return;
		}
		
		// If no icon were passed we leave the icon html empty, which will give us no icon at all.
		var icon_html = "";
		if(this.icon !== "")
		{
			icon_html = '<i class="cIcon icon-'+this.icon+'" type="alert-type-icon"></i>'
		}
		
		// Append the alert to the body, hidden
		$("body").append('<div class="cAlert cAlert-'+this.type+'" type="alert" id="'+this.id+'" style="display: none">'+icon_html+'<div class="cAlert-content"><p>'+this.body+'</p></div></div>');
		// Store the element of the alert
		this.elem = $("#" + this.id);
		// Set the alert visible and put it outside the screen
		this.elem.css("display", "").css("top", 0 - this.elem.height());
		// Move the alert into the screen by moving it down from it's first position
		$("#" + this.id).stop().animate({top:0}, 500, this.onshown);
		
		// _this is to refer to the correct cAlert class, we can't access "this" inside the function inside a private function
		var _this = this;
		// Set onclick event
		this.elem.click(function() { _this.onclick(); });
	};
	
	this.dismiss = function() {
		var _this = this;
		if(this.ondismiss() === false)
		{
			return;
		}
		
		this.elem.stop().animate({top: 0 - this.elem.height()}, 500, function() { _this.ondismissed(); _this.remove(); });
	}
	
	this.remove = function() {
		if(this.onremove() === false)
		{
			return;
		}
		this.elem.remove();
	}
	
	this.onclick = function() {
		if(this.hideTimeout)
		{
			clearTimeout(this.hideTimeout);
		}
		this.remove();
	}
	
	// When the alert() function is called
	this.onalert = function() {};
	// When the alert animation from alert() is done
	this.onalertdone = function() {};
	
	// When the show() function is called
	this.onshow = function() {};
	// When the dismiss() function is called
	this.ondismiss = function() {};
	
	// When the alert animation from show() is finished
	this.onshown = function() {};
	// When the alert animation from dismiss() is finished
	this.ondismissed = function() {};
	
	// When the alert is removed
	this.onremove = function() {};
}

function generateUUID() {
    var d = new Date().getTime();
    var uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function(c) {
        var r = (d + Math.random()*16)%16 | 0;
        d = Math.floor(d/16);
        return (c=='x' ? r : (r&0x3|0x8)).toString(16);
    });
    return uuid;
};