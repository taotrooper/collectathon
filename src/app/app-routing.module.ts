import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    /*redirectTo: 'login',*/
    pathMatch: 'full'
  },
  {
    path: 'collections',
    loadChildren: () => import('./collections/collections.module').then( m => m.CollectionsPageModule)
  },
  {
    path: 'myitems',
    loadChildren: () => import('./myitems/myitems.module').then( m => m.MyitemsPageModule)
  },
  {
    path: 'mybooks',
    loadChildren: () => import('./mybooks/mybooks.module').then( m => m.MybooksPageModule)
  },
  {
    path: 'mymusic',
    loadChildren: () => import('./mymusic/mymusic.module').then( m => m.MymusicPageModule)
  },
  {
    path: 'myvideo',
    loadChildren: () => import('./myvideo/myvideo.module').then( m => m.MyvideoPageModule)
  },
  {
    path: 'mygames',
    loadChildren: () => import('./mygames/mygames.module').then( m => m.MygamesPageModule)
  },
  {
    path: 'mycomics',
    loadChildren: () => import('./mycomics/mycomics.module').then( m => m.MycomicsPageModule)
  },
  {
    path: 'explore',
    loadChildren: () => import('./explore/explore.module').then( m => m.ExplorePageModule)
  },
  {
    path: 'allseries',
    loadChildren: () => import('./allseries/allseries.module').then( m => m.AllseriesPageModule)
  },
  {
    path: 'allpeople',
    loadChildren: () => import('./allpeople/allpeople.module').then( m => m.AllpeoplePageModule)
  },
  {
    path: 'allgenres',
    loadChildren: () => import('./allgenres/allgenres.module').then( m => m.AllgenresPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'user',
    loadChildren: () => import('./user/user.module').then( m => m.UserPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'collection/:id',
    loadChildren: () => import('./collection/collection.module').then( m => m.CollectionPageModule)
  },
  {
    path: 'add-collection/:id',
    loadChildren: () => import('./add-collection/add-collection.module').then( m => m.AddCollectionPageModule)
  },
  {
    path: 'create-collection',
    loadChildren: () => import('./create-collection/create-collection.module').then( m => m.CreateCollectionPageModule)
  },
  {
    path: 'edit-collection/:id',
    loadChildren: () => import('./edit-collection/edit-collection.module').then( m => m.EditCollectionPageModule)
  },
  {
    path: 'item/:type/:id',
    loadChildren: () => import('./item/item.module').then( m => m.ItemPageModule)
  },
  {
    path: 'edition/:type/:id',
    loadChildren: () => import('./edition/edition.module').then( m => m.EditionPageModule)
  },
  {
    path: 'wishlist',
    loadChildren: () => import('./wishlist/wishlist.module').then( m => m.WishlistPageModule)
  },
  {
    path: 'create-website',
    loadChildren: () => import('./create-website/create-website.module').then( m => m.CreateWebsitePageModule)
  },
  {
    path: 'edit-website/:id',
    loadChildren: () => import('./edit-website/edit-website.module').then( m => m.EditWebsitePageModule)
  },
  {
    path: 'add-book',
    loadChildren: () => import('./add-book/add-book.module').then( m => m.AddBookPageModule)
  },
  {
    path: 'add-comic',
    loadChildren: () => import('./add-comic/add-comic.module').then( m => m.AddComicPageModule)
  },
  {
    path: 'add-game',
    loadChildren: () => import('./add-game/add-game.module').then( m => m.AddGamePageModule)
  },
  {
    path: 'add-music',
    loadChildren: () => import('./add-music/add-music.module').then( m => m.AddMusicPageModule)
  },
  {
    path: 'add-video',
    loadChildren: () => import('./add-video/add-video.module').then( m => m.AddVideoPageModule)
  },
  {
    path: 'create-item/:type',
    loadChildren: () => import('./create-item/create-item.module').then( m => m.CreateItemPageModule)
  },
  {
    path: 'edit-item/:id',
    loadChildren: () => import('./edit-item/edit-item.module').then( m => m.EditItemPageModule)
  },
  {
    path: 'create-book/:item',
    loadChildren: () => import('./create-book/create-book.module').then( m => m.CreateBookPageModule)
  },
  {
    path: 'create-comic/:item',
    loadChildren: () => import('./create-comic/create-comic.module').then( m => m.CreateComicPageModule)
  },
  {
    path: 'create-music/:item',
    loadChildren: () => import('./create-music/create-music.module').then( m => m.CreateMusicPageModule)
  },
  {
    path: 'create-game/:item',
    loadChildren: () => import('./create-game/create-game.module').then( m => m.CreateGamePageModule)
  },
  {
    path: 'create-video/:item',
    loadChildren: () => import('./create-video/create-video.module').then( m => m.CreateVideoPageModule)
  },
  {
    path: 'create-series',
    loadChildren: () => import('./create-series/create-series.module').then( m => m.CreateSeriesPageModule)
  },
  {
    path: 'create-person',
    loadChildren: () => import('./create-person/create-person.module').then( m => m.CreatePersonPageModule)
  },
  {
    path: 'edit-book/:id',
    loadChildren: () => import('./edit-book/edit-book.module').then( m => m.EditBookPageModule)
  },
  {
    path: 'edit-comic/:id',
    loadChildren: () => import('./edit-comic/edit-comic.module').then( m => m.EditComicPageModule)
  },
  {
    path: 'edit-game/:id',
    loadChildren: () => import('./edit-game/edit-game.module').then( m => m.EditGamePageModule)
  },
  {
    path: 'edit-music/:id',
    loadChildren: () => import('./edit-music/edit-music.module').then( m => m.EditMusicPageModule)
  },
  {
    path: 'edit-video/:id',
    loadChildren: () => import('./edit-video/edit-video.module').then( m => m.EditVideoPageModule)
  },
  {
    path: 'series/:id',
    loadChildren: () => import('./series/series.module').then( m => m.SeriesPageModule)
  },
  {
    path: 'edit-series/:id',
    loadChildren: () => import('./edit-series/edit-series.module').then( m => m.EditSeriesPageModule)
  },
  {
    path: 'person/:id',
    loadChildren: () => import('./person/person.module').then( m => m.PersonPageModule)
  },
  {
    path: 'edit-person/:id',
    loadChildren: () => import('./edit-person/edit-person.module').then( m => m.EditPersonPageModule)
  },
  {
    path: 'add-person/:type/:item',
    loadChildren: () => import('./add-person/add-person.module').then( m => m.AddPersonPageModule)
  },
  {
    path: 'genre/:id',
    loadChildren: () => import('./genre/genre.module').then( m => m.GenrePageModule)
  },
  {
    path: 'random',
    loadChildren: () => import('./random/random.module').then( m => m.RandomPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
