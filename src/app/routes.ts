
import {BookSearchComponent} from "./smart-components/book-search/book-search.component";
import {BookCollectionComponent} from "./smart-components/book-collection/book-collection.component";
import {AddBookComponent} from "./dumb-components/add-book/add-book.component";
import {PageNotFoundComponent} from "./dumb-components/page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";

export const routes = [
    {
        path : 'login',
        component : LoginComponent
    },
    {
        path: 'register',
        component : RegisterComponent
    },
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