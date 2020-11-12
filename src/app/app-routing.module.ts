import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pagecomponents/home/home.component';
import { RoomComponent } from './pagecomponents/room/room.component';


const routes: Routes = [
    //{ path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: '', component: HomeComponent },
    // { path: 'samples', component: SamplesComponent },
    { path: '**', component: RoomComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
