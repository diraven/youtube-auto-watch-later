WARNING: Not functional any more. Reason: https://support.google.com/youtube/thread/63269933?hl=en

The script automatically adds videos from all your YouTube subscriptions into your watch later list. 

Didn't find any signs of such functionality available natively... which is weird. Am I missing something?

Anyways, I've taken time and wrote a simple google script to do that for me. For anyone interested feel free to use, copy and modify any way you like:

* [Google Drive](https://script.google.com/d/1m66gEPsb4YS6cD17Z3u8FkNdpTzQnOB6AaNvSv26PoHxWzDm8RxX14j5/edit?usp=sharing)

* [Raw Sources](https://github.com/diraven/youtube-auto-watch-later/blob/master/script.js) (you will have to copy-paste sources into your google drive script editor)

In order for this to work you need to:

0. Copy the script to your local google drive (so that when I do further changes it will not affect your version).

0. Have all your YT subscriptions send emails to your gmail about new videos and label them with the "YouTube WL" label (keep the uppercase letters and remove the quotes).

0. [Enable advanced services in google](https://developers.google.com/apps-script/guides/services/advanced) - YouTube Data API v3.

0. Select "AddNewVideosToWatchLater" on the left side of the screen.

0. Run "AddAddNewVideosToWatchLaterTrigger" function once (it will add trigger for you).

0. Press "save".

0. You may also want to add "notifications" to get errors to your email if any.

0. That should be it.

If there are any problems or unexpected behavior do the following:

0. Open the script.

0. Select "AddNewVideosToWatchLater" on the left side of the screen.

0. Select and run "AddNewVideosToWatchLater" function once.

0. Press ctrl+enter or visit view->logs menu and look for errors.

0. What script essentially does is parses all unread messages with "YouTube WL" label, gets video url form them and then marks them read.

If there are any questions/proposals/improvements/bugs - feel free to leave a comment.

The script is free to use/modify/extend.

If you still like to express your gratitude - there is http://donate.diraven.com/ . =)

Thanks and good luck. =)
