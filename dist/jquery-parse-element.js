"use strict";

(function ($) {
	$.fn.parseElement = function () {
		if (this.length > 1) {
			var arr = [];

			$.each(this, function (index, element) {
				arr.push($(element).parseElement());
			});

			return arr;
		} else {
			var $this = this[0];
			var id = $this.id;
			var className = $this.className;
			var textContent = $this.textContent;

			return {
				id: id,
				className: className,
				textContent: textContent
			};
		}
	};
})(jQuery);