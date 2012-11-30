;(function($, window, document, undefined) {

	// define .facebookShare empty plugin
	$.fn.facebookShare = $.noop;

	/**
	 * Defaults for the facebookShare plugin.
	 * 
	 * @type {Object}
	 */
	$.fn.facebookShare.defaults = {
		/*
		 * POPUP WINDOW OPTIONS
		 */
		
		/**
		 * URL to Facebook sharer.
		 * 
		 * @type {String}
		 */
		facebookUrl : 'http://www.facebook.com/share.php',

		/**
		 * Width of the popup window.
		 * 
		 * @type {Number}
		 */
		width : 550,

		/**
		 * Height of the popup window.
		 * 
		 * @type {Number}
		 */
		height : 450,

		/**
		 * Left position of the popup window.
		 * Can be either a number or a function that returns a number and takes popup's width as argument.
		 * 
		 * @type {Function}
		 */
		left : function(width) {
			return ($(window).width() - width) / 2;
		},

		/**
		 * Top position of the popup window.
		 * Can be either a number or a function that returns a number and takes popup's height as argument.
		 * 
		 * @type {Function}
		 */
		top : function(height) {
			return ($(window).height() - height) / 2;
		},

		/*
		 * SHARE OPTIONS
		 */
		/**
		 * URL to be shared. If set to {String} 'current' then it will take the currently loaded url.
		 * @type {String}
		 */
		url : 'current'
	};

	$('body').on('click', '.facebook-share', function(ev) {
		var $el = $(this),
			opt = $.extend({}, $.fn.facebookShare.defaults, $el.data(), $el.data('facebookShare')),
			params = {
				url : (opt.url == 'current') ? window.location.href : opt.url,
				text : opt.text
			};

		window.open(opt.facebookUrl + '?' + $.param(params), 'facebook', [
			'status=1',
			'width=' + opt.width,
			'height=' + opt.height,
			'top=' + (typeof(opt.top) === 'function') ? opt.top.apply($el[0], [opt.height]) : opt.top,
			'left=' + (typeof(opt.left) === 'function') ? opt.left.apply($el[0], [opt.left]) : opt.left
		].join(','));

		return false;
	});

})(jQuery, window, document);