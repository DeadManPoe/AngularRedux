export interface GoogleBook {
    title : string,
    subtitle? : string,
    authors : string[],
    imageLinks : ImageLinksStructure,
    description? : string
}

interface ImageLinksStructure {
    thumbnail : string
}