import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RankingComponent } from './ranking/ranking.component';
import { ForumComponent } from './forum/forum.component';
import { AjudaComponent } from './ajuda/ajuda.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'ajuda',
        pathMatch: 'full' 
    },

    {
        path: 'home',
        component: HomeComponent,
    },
    {
        path: 'ranking',
        component: RankingComponent,
    },
    {
        path: 'forum',
        component: ForumComponent,
    },
    {
        path: 'ajuda',
        component: AjudaComponent,
    },
   
];