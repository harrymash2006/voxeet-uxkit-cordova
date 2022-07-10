"use strict";
class AudioTrack {
    constructor(trackId) {
        this.trackId = trackId;
    }
    json() {
        return {
            trackId: this.trackId,
        };
    }
}
module.exports = AudioTrack;
//# sourceMappingURL=UserInfo.js.map