
import {BookSearchComponent} from "./smart-components/book-search/book-search.component";
import {BookCollectionComponent} from "./smart-components/book-collection/book-collection.component";
import {AddBookComponent} from "./dumb-components/add-book/add-book.component";
import {PageNotFoundComponent} from "./dumb-components/page-not-found/page-not-found.component";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {AuthGuard} from "./authGuard";

export const routes = [
    {
        path : 'login',
        component : LoginComponent,
        canActivate : [AuthGuard]
    },
    {
        path: 'register',
        component : RegisterComponent
    },
    {
        path : 'search',
        component : BookSearchComponent,
        canActivate : [AuthGuard]
    },
    {
        path : 'collection',
        component : BookCollectionComponent,
        canActivate : [AuthGuard]
    },
    {
        path : 'add-book',
        component : AddBookComponent,
        canActivate : [AuthGuard]

    },
    {
        path : '',
        component : PageNotFoundComponent
    }
];