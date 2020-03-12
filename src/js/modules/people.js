export default () => {
	var audios = document.getElementsByTagName('audio');
	audiojs.events.ready(function() {
		audiojs.createAll();
	});

};