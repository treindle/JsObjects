var Point = (function() {
	'use strict';

	// Private variables
	var x = 0;
	var y = 0;

	// Private function
	var bar = function() {
		return 25;
	};

	// Constructor
	var Point = function(x1, y1) {
		x = x1;
		y = y1;
	}

	// Public method
	Point.prototype.add = function() {
		return x + y + bar();
	};

	return Point;
})();

window.onload = function() {'use strict';

	var el = document.getElementById('content');
	var point = new Point(3, 5);
	el.innerHTML = point.add();
	// Print 32
}; 