import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './routes/components/main/main.component';
import { HomeComponent } from './routes/pages/home/home.component';
import { TestComponent } from './routes/pages/test/test.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'test', component: TestComponent },
      { path: '', component: HomeComponent },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
