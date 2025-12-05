export interface Experiment {
    RBNumber: string;
    experimentTitle: string;
    investigator: string;
    notes: string;
}

export interface ExperimentsFile {
    experiments: Experiment[];
}