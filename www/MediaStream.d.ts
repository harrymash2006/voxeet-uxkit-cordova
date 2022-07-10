import { MediaStreamType } from './types/ConferenceStatus';
import AudioTrack from './AudioTrack';
import VideoTrack from './VideoTrack';

declare class MediaStream {
    streamId: string;
    type: MediaStreamType;
    audioTracks: [AudioTrack];
    videoTracks: [VideoTrack];
    constructor(streamId: string, type: MediaStreamType, audioTracks: [AudioTrack], videoTracks: [VideoTrack]);
    json(): {
        streamId: string;
        type: MediaStreamType;
        audioTracks: [AudioTrack];
        videoTracks: [VideoTrack];
    };
}
export = MediaStream;
