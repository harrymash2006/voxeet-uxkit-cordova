declare class ParticipantInfo {
    name: string;
    externalId: string;
    avatarUrl: string | undefined;
    constructor(externalId: string, name: string, avatarUrl: string | undefined);
    json(): {
        name: string;
        externalId: string;
        avatarUrl: string | undefined;
    };
}
export = ParticipantInfo;
