var alertQueue = [];
var alerts = [];

var cAlert = function(body, type, icon = "bubble2", time = 2) {
	this.body = body;
	this.type = type;
	this.icon = icon;
	this.time = time;
	
	// Add the alert to the list of all alerts
	alerts.push(this);
	
	// _this is to refer to the correct cAlert class, we can't access "this" inside a private function
	var _this = this;
		
	// Generate a random ID for the alert
	this.id = generateUUID();
	
	// Create the element
	this.elem = $('<div class="cAlert cAlert-'+this.type+'" type="alert" id="'+this.id+'" style="display: none"><i class="cIcon icon-'+this.icon+'" type="alert-type-icon"></i><div class="cAlert-content"><p>'+this.body+'</p></div><div class="cAlert-queue-count" id="qc-'+this.id+'"><span class="queue-count">0</span></div></div>');
	
	// Stores the ID of the timeout to dismiss the alert
	this.hideTimeout = undefined;
	
	// Set click event
	this.elem.on("click", function() { _this.click(); });
	
	this.alert = function() {
		// Call onalert function
		if(this.onalert() === false)
		{
			return;
		}
		
		// Append the alert to the body, hidden
		$("body").append(this.elem);
		
		// Set the position of the alert queue count box (The alert box height + 2, the border is 2px)
		$("#qc-" + this.id).css("top", this.elem.height() + 2);
		
		// Set the alert visible and put it outside the screen
		this.elem.css("display", "").css("top", 0 - this.elem.height() - $("#qc-" + this.id).height() - 20);

		// Move the alert into the screen by moving it down from it's first position
		$("#" + this.id).stop().animate({top:0}, 500, this.onalertdone);

		// Remove the alert after the entered time in seconds
		// setTimemout is in milliseconds so we have to convert the seconds entered
		if(this.time !== 0)
		{
			hideTimeout = setTimeout(function () { _this.dismiss() }, this.time * 1000);
		}
	};
	
	this.queue = function() {
		// Check if the current alert is in the queue already
		var isInQueue = false;
		for(anAlert of alertQueue)
		{
			if(anAlert === this)
			{
				isInQueue = true;
				break;
			}
		}
		
		// If it's not in the queue we add the alert to the queue.
		if(!isInQueue)
		{
			// Add the alert to the queue
			alertQueue.push(this);
		}
		
		if(alertQueue[0] === this)
		{
			// Launch alert on the alert on index 0
			alertQueue[0].alert();
		}
		
	};

	this.dismiss = function() {
		// Call the ondismiss function
		if(this.ondismiss() === false)
		{
			return;
		}
	
		// Make the alert go up and then we remove it
		// We also call the ondismissed function
		this.elem.stop().animate({top: 0 - this.elem.height() - $("#qc-" + this.id).height() - 20}, 500, function() { _this.ondismissed(); _this.remove(); });
	}

	this.remove = function() {
		// Check if the alert is in the queue
		if(this.isInQueue())
		{
			// If the alert is in the queue we remove it from the queue
			// when the alert is removed.
			var index = getIndexAlertQueue(this.id);
			alertQueue.splice(index, 1);
			// Check if there's another one in the queue
			if(alertQueue[0])
			{
				// Queue that alert
				alertQueue[0].queue();
			}
		}
		
		// Call the onremove function
		if(this.onremove() === false)
		{
			return;
		}
		
		// Remove the element from the body
		this.elem.remove();
	}

	this.click = function() {
		// Call the onclick function
		if(this.onclick() === false)
		{
			return;
		}
		
		// If the alert has a timer until it is being removed
		if(this.hideTimeout)
		{
			// Remove the timeout when we click the alert
			clearTimeout(this.hideTimeout);
		}
		
		// Call the remove function
		this.remove();
	}
	
	this.isInQueue = function() {
		// Get the index of the alert in the alertQueue list (if it exists, otherwise it returns -1)
		var index = getIndexAlertQueue(this.id);
		// If index is greater than -1
		if(index > -1)
		{
			// The alert is in the queue list, index would've been -1 if it wasn't in the list
			return true;
		}
		// The index was not greater than -1, return false
		return false;
	};

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

	// When the alert box is clicked
	this.onclick = function() {};
	
	// When the alert is removed
	this.onremove = function() {};
}

function getIndexAlertQueue(id)
{
	var index = 0;
	for(anAlert of alertQueue)
	{
		if(anAlert.id === id)
		{
			return index;
		}
		index++;
	}
	
	return -1;
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
