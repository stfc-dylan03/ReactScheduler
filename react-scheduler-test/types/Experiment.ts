export interface Experiment {
    RBNumber: string;
    experimentTitle: string;
    investigator: string;
    instrument: string;
    notes: string;
    startDate: string;
    endDate: string;
}

export interface ExperimentsFile {
    experiments: Experiment[];
}