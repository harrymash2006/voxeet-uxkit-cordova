import { ParticipantType, ParticipantStatus, ParticipantInfo } from './types/ConferenceStatus';

declare class Participant {
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

    constructor(id: string,
        audioReceivingFrom: boolean,
        audioTransmitting: boolean,
        angle: number,
        distance: number,
        mute: boolean,
        type: ParticipantType,
        status: ParticipantStatus,
        info: ParticipantInfo,
        streams: [MediaStream]);
        
    json(): {
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
    };
}
export = Participant;
