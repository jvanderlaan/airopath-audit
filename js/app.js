$(document).ready(function() {

	// $('.panzoom').panzoom();

	(function() {
		var $zoomArea = $('#zoom-area');
		$zoomArea.find('.panzoom').panzoom({
			$zoomIn: $zoomArea.find(".zoom-in"),
			$zoomOut: $zoomArea.find(".zoom-out"),
			$zoomRange: $zoomArea.find(".zoom-range"),
			$reset: $zoomArea.find(".reset")
		});
	})();

	$('.panzoom').panzoom("option", {
		linearZoom: true
	});

});