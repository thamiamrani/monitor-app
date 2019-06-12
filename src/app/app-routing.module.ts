import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { ImageViewerModule } from 'ngx-image-viewer';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  { path: '', loadChildren: './tabs/tabs.module#TabsPageModule' }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules }),
    ImageViewerModule.forRoot(),
    HttpClientModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
