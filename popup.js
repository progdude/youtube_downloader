
function convert() {
    var url = document.getElementById("box").value;
    
    var n = url.replace("https", "http");

    document.getElementById("convert1").style.visibility="hidden";
    document.getElementById("download1").style.visibility="visible";
    download(n);
}

function download(n){
	document.getElementById("download1").href="http://youtubeinmp3.com/fetch/?video="+n;
}


function startDownload(){
	chrome.downloads.download({
	  	url: document.getElementById("download1").href,
	  	saveAs: false
	}, null);
}




function currentURL(){
	chrome.tabs.query({currentWindow: true, active: true}, function(tabs){
    	var n = tabs[0].url.replace("https", "http");
    	if(n.search("youtube")==11){
    	    document.getElementById("convert1").style.visibility="hidden";
    		document.getElementById("current1").style.visibility="hidden";
    		document.getElementById("box").value=n;
    		download(n);
    		startDownload();
    	}
    	else{
    		alert("Page isn't on Youtube");
    	}
	});
}

document.getElementById("convert1").addEventListener('click', convert);
document.getElementById("download1").addEventListener('click', startDownload);
document.getElementById("current1").addEventListener('click', currentURL);

