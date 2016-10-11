
import {BookSearchComponent} from "./book-search/book-search.component";
import {BookListComponent} from "./book-list/book-list.component";
import {AddBookComponent} from "./add-book/add-book.component";
import {HomeComponent} from "./home/home.component";

export const routes = [
    {
        path : 'search',
        component : BookSearchComponent
    },
    {
        path : 'collection',
        component : BookListComponent
    },
    {
        path : 'add-book',
        component : AddBookComponent

    },
    {
        path : '',
        component : HomeComponent
    }
];