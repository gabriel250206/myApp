import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { Noticia2Component } from './noticia2/noticia2.component';
import { Noticia3Component } from './noticia3/noticia3.component';
import { Noticia4Component } from './noticia4/noticia4.component';
import { Noticia5Component } from './noticia5/noticia5.component';
import { Noticia6Component } from './noticia6/noticia6.component';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'contact',
    component: ContactComponent,
  },
  {
    path: 'noticia2',
    component: Noticia2Component,
  },
  {
    path: 'noticia3',
    component: Noticia3Component,
  }
  ,
  {
    path: 'noticia3',
    component: Noticia3Component,
  }
  ,
  {
    path: 'noticia4',
    component: Noticia4Component,
  }
  ,
  {
    path: 'noticia5',
    component: Noticia5Component,
  }
  ,
  {
    path: 'noticia6',
    component: Noticia6Component,
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
