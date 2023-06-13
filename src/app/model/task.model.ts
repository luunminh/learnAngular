export interface Task {
    id: number;
    title: string;
    description: string;
    status: Status;
    createAt: number;
}

export enum Status {
    doing = 'doing',
    finished = 'finished',
}
