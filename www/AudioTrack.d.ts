declare class AudioTrack {
    trackId: string;
    constructor(trackId: string);
    json(): {
        trackId: string;
    };
}
export = AudioTrack;
