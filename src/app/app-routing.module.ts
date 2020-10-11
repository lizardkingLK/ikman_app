import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

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
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./pages/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'signin',
    loadChildren: () => import('./pages/signin/signin.module').then( m => m.SigninPageModule)
  },
  {
    path: 'signup',
    loadChildren: () => import('./pages/signup/signup.module').then( m => m.SignupPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },
  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'product',
    loadChildren: () => import('./pages/product/product.module').then( m => m.ProductPageModule)
  },
  {
    path: 'promote',
    loadChildren: () => import('./pages/promote/promote.module').then( m => m.PromotePageModule)
  },
  {
    path: 'chat',
    loadChildren: () => import('./pages/chat/chat.module').then( m => m.ChatPageModule)
  },
  {
    path: 'category',
    loadChildren: () => import('./pages/category/category.module').then( m => m.CategoryPageModule)
  },
  {
    path: 'faq',
    loadChildren: () => import('./pages/faq/faq.module').then( m => m.FaqPageModule)
  },
  {
    path: 'favourites',
    loadChildren: () => import('./pages/favourites/favourites.module').then( m => m.FavouritesPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'seller',
    loadChildren: () => import('./pages/seller/seller.module').then( m => m.SellerPageModule)
  },
  {
    path: 'buy1',
    loadChildren: () => import('./pages/buy1/buy1.module').then( m => m.Buy1PageModule)
  },
  {
    path: 'buy2',
    loadChildren: () => import('./pages/buy2/buy2.module').then( m => m.Buy2PageModule)
  },
  {
    path: 'sell1',
    loadChildren: () => import('./pages/sell1/sell1.module').then( m => m.Sell1PageModule)
  },
  {
    path: 'sell2',
    loadChildren: () => import('./pages/sell2/sell2.module').then( m => m.Sell2PageModule)
  },
  {
    path: 'chat2',
    loadChildren: () => import('./pages/chat2/chat2.module').then( m => m.Chat2PageModule)
  },
  {
    path: 'afterhome',
    loadChildren: () => import('./pages/afterhome/afterhome.module').then( m => m.AfterhomePageModule)
  },
  {
    path: 'beforeprofile',
    loadChildren: () => import('./pages/beforeprofile/beforeprofile.module').then( m => m.BeforeprofilePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
