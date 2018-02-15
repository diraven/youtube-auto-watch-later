// http://www.reddit.com/user/DiRaven

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
    var messages = threads[i].getMessages()
    for (var k in messages)
    {
      var msg = messages[k];
      if (msg.isUnread())
      {
        var body = msg.getBody()
        var video_id = regexp.exec(body);
        if (video_id != null) {
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
          try {
            YouTube.PlaylistItems.insert(resource, 'snippet');
          } catch (e) {
            if(!e.message.match('Video not found.') && !e.message.match('Video already in playlist.')) {
              Logger.log(e.message)
              throw e
            }
          }
          msg.markRead()
        }
      }
    }
    //      threads[i].moveToArchive();
  }
}

function test() {
  var regexp = /\/watch\?v%3D([^%]+)"/i;
  result = regexp.exec("/watch/v%3Dfdasasdf");
  
  Logger.log(result);
}
