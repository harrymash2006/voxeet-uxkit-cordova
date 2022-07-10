"use strict";
class MediaStream {
    constructor(streamId, type, audioTracks, videoTracks) {
        this.streamId = streamId;
        this.type = type;
        this.audioTracks = audioTracks;
        this.videoTracks = videoTracks;
    }
    json() {
        return {
            streamId: this.streamId,
            type: this.type,
            audioTracks: this.audioTracks,
            videoTracks: this.videoTracks
        };
    }
}
module.exports = MediaStream;
//# sourceMappingURL=MediaStream.js.map