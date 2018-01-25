var assert = chai.assert;
var $div   = $('#foo');

describe('Plugin method', function() {
	it('should be a function', function() {
		assert.typeOf($div.parseElement, 'function');
	});

	it('should have an id', function() {
		assert.equal($div.parseElement().id, 'foo');
	});

	it('get the data of a set of els', function() {
		var $spans = $('.bar');
		var data   = $spans.parseElement();

		assert.typeOf(data, 'array');

		data.forEach(function(element) {
			assert.equal(element.className, 'bar');
			assert.equal(element.textContent, 'bar');
		});
	});

	it('should have text content', function() {
		assert.equal($div.parseElement().textContent, 'The content');
	})
});