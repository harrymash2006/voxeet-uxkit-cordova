declare class VideoTrack {
    trackId: string;
    constructor(trackId: string);
    json(): {
        trackId: string;
    };
}
export = VideoTrack;
