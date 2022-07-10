"use strict";
class Participant {
    constructor(id, audioReceivingFrom, audioTransmitting, angle, distance, mute, type, status, info, streams) {
        this.id = id;
        this.audioReceivingFrom = audioReceivingFrom;
        this.audioTransmitting = audioTransmitting;
        this.angle = angle;
        this.distance = distance;
        this.mute = mute;
        this.type = type;
        this.status = status;
        this.info = info;
        this.streams = streams;
    }
    json() {
        return {
            id: this.id,
            audioReceivingFrom: this.audioReceivingFrom,
            audioTransmitting: this.audioTransmitting,
            angle: this.angle,
            distance: this.distance,
            mute: this.mute,
            type: this.type,
            status: this.status,
            info: this.info,
            streams: this.streams,
        };
    }
}
module.exports = Participant;
//# sourceMappingURL=MediaStream.js.map