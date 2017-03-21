// Run this once to grant script access and add trigger automatically
function AddAddNewVideosToWatchLaterTrigger()
{
	ScriptApp.newTrigger('AddNewVideosToWatchLater')
		.timeBased()
		.everyHours(1)
		.create();
}

// Automatically adds new subscription videos from youtube to watch later list (if you have email notifications for those turned on)
function AddNewVideosToWatchLater()
{
	var regexp = /\/watch(?:\?|%3F)v%3D([^%]+)/i;
	var threads = GmailApp.search('label:"YouTube WL" is:unread');
	for (var i in threads) {
		try {
			var messages = threads[i].getMessages();
			for (var k in messages)
			{
				var msg = messages[k];
				if (msg.isUnread())
				{
					var body = msg.getBody();
					var video_id = regexp.exec(body);
					if (video_id != null) {
						msg.markRead();
						video_id = video_id[1];
						var part= 'id';
						var details = {
							videoId: video_id,
							kind: 'youtube#video'
						};
						var resource = {
							snippet: {
								playlistId: 'WL',
								resourceId: details
							}
						};
						YouTube.PlaylistItems.insert(resource, 'snippet');
					}
				}
			}
//      threads[i].moveToArchive();
		}
		catch(e) {
			Logger.log(e.message);
		}
	}
}