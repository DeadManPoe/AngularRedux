
import {BookSearchComponent} from "./book-search/book-search.component";
import {BookCollectionComponent} from "./book-collection/book-collection.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {PageNotFoundComponent} from "./page-not-found/page-not-found.component";

export const routes = [
    {
        path : 'search',
        component : BookSearchComponent
    },
    {
        path : 'collection',
        component : BookCollectionComponent
    },
    {
        path : 'add-book',
        component : AddBookComponent

    },
    {
        path : '',
        component : BookCollectionComponent
    },
    {
        path : '',
        component : PageNotFoundComponent
    }
];