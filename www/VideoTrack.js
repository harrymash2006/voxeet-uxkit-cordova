"use strict";
class VideoTrack {
    constructor(trackId) {
        this.trackId = trackId;
    }
    json() {
        return {
            trackId: this.trackId,
        };
    }
}
module.exports = VideoTrack;
//# sourceMappingURL=UserInfo.js.map