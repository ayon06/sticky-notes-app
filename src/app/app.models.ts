
export class Card {
    title = 'New Note';
    noteId = 0;
    description = 'Edit Description';
    dueDate: Date = null;
    sectionId = '';
    sectionPos: number;
    listPos: number;
    constructor(id: number, sectionId: string, sectionPos: number, listPos: number) {
        this.noteId = id;
        sectionId = sectionId;
        sectionPos = sectionPos;
        listPos = listPos;
    }
}

export class Section {
    rows = 1;
    cols = 1;
    color = 'lightblue';
    id = 'New Section';
    notesCollections: Card[][] = [];
}
