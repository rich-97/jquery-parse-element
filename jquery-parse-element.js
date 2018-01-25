(function($) {
	$.fn.parseElement = function() {
		if (this.length > 1) {
			var arr = []

			$.each(this, function(index, element) {
				arr.push($(element).parseElement())
			})

			return arr
		} else {
			const $this       = this[0]
			const id          = $this.id
			const className   = $this.className
			const textContent = $this.textContent

			return {
				id,
				className,
				textContent
			}
		}
	}
})(jQuery)
