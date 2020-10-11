import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

// import { Routes, RouterModule } from '@angular/router';

import { HomePageRoutingModule } from './home-routing.module';
import { HomePage } from './home.page';

// const routes: Routes = [
//   {
//     path: 'home',
//     component: HomePage,
//     children: [
//       {
//         path: 'profile',
//         loadChildren: '../pages/profile/profile.module#ProfilePageModule'
//       },
//       {
//         path: 'notifications',
//         loadChildren: '../pages/notifications/notifications.module#NotificationsPageModule'
//       },
//       {
//         path: 'add',
//         loadChildren: '../pages/add/add.module#AddPageModule'
//       },
//     ]
//   },
//   {
//     path: '',
//     redirectTo: '/home'
//   }
// ];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule
    //HomePageRoutingModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
