export declare enum ConferenceStatus {
    DEFAULT = "DEFAULT",
    CREATING = "CREATING",
    CREATED = "CREATED",
    JOINING = "JOINING",
    JOINED = "JOINED",
    LEAVING = "LEAVING",
    LEFT = "LEFT",
    ERROR = "ERROR",
    DESTROYED = "DESTROYED",
    ENDED = "ENDED"
}

export declare enum ParticipantType {
    NONE = 0,
    USER = 1,
    PSTN = 2,
    LISTENER = 3,
    MIXER = 4
}

export declare enum ParticipantStatus {
    RESERVED = 0,
    INACTIVE = 1,
    DECINE = 2,
    CONNECTING = 3,
    CONNECTED = 4,
    LEFT = 5,
    WARNING = 6,
    ERROR = 7,
    KICKED = 8
}

export interface ParticipantInfo {
    externalID: string;
    name: string;
    avatarURL: string;
}

export declare enum MediaStreamType {
    CAMERA = 0,
    SCREENSHARE = 1,
    CUSTOM = 2
}

export interface MediaStream {
    streamId: string;
    type: MediaStreamType;
    audioTracks: [AudioTrack];
    videoTracks: [VideoTrack];
}

export interface AudioTrack {
    trackId: string;
}

export interface VideoTrack {
    trackId: string;
}

export interface Participant {
    id: string;
    audioReceivingFrom: boolean;
    audioTransmitting: boolean;
    angle: number;
    distance: number;
    mute: boolean;
    type: ParticipantType;
    status: ParticipantStatus;
    info: ParticipantInfo;
    streams: [MediaStream];
}

export interface ConferenceStatusUpdated {
    status: ConferenceStatus;
    conferenceAlias: string;
    conferenceId: string;
    participants: [Participant]

}
export declare function fromRawToConferenceStatus(raw: any): ConferenceStatusUpdated | null;
