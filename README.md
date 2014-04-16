## Custom Soundboard

There were no existing open source methods for creating custom soundboards, so we built one for the [Emory Hackathon](https://www.hackerleague.org/hackathons/emory-hackathon-2014-co-hosted-by-microsoft/hacks/musiqu-dot-es)

Here's a [working demo.](http://musiques.s3-website-us-east-1.amazonaws.com/musique/lol/index.html)

We adopted some of the code from Chris Wilson's [Audio Recorder](https://github.com/cwilso/AudioRecorder). Thanks Chris!

To-Do:
- Refactor messy code / DRY it up
- Dynamically add as many samples as you want (instead of just 6)
- Allow keyboard shortcuts
- Buffer re-use
