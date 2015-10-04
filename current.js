function current(){
	chrome.tabs.getCurrent(tab){
		function matchYoutubeUrl(url){
		var p = /^(?:https?:\/\/)?(?:www\.)?    (?:youtu\.be\/|youtube\.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))((\w|-){11})(?:\S+)?$/;
 		return (url.match(p)) ? true : false ;
	}

	}
	


}