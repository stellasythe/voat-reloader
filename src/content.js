if (document.body.innerHTML.search("The service is unavailable") || document.title == 'Service Unavailable' || document.body.innerHTML.search("All of our servers are busy right now")) {
	location.reload();
}

