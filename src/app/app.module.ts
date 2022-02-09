import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { ProfileContainerComponent } from './profile-container/profile-container.component';
import { ProfileComponent } from './profile-container/profile/profile.component';
import { problemsFacade } from './Store/Facade/problems.facade';
import { EffectsModule } from '@ngrx/effects';
import { ProblemsEffects } from './Store/Effects/problems.effects';
import { problemsReducer } from './Store/Reducers/problems.reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProfileContainerComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({problems: problemsReducer}),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production,
    }),
  ],
  bootstrap: [AppComponent],
  providers: [problemsFacade],
})
export class AppModule {}
