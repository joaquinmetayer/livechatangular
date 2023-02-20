import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MessageComponent } from './components/message/message.component';
import { HeroComponent } from './components/hero/hero.component';
import { MessagesComponent } from './components/messages/messages.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common';
import { AngularFireModule } from '@angular/fire';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFireStorageModule } from '@angular/fire/storage';
import { AngularFirestoreModule } from '@angular/fire/firestore';

const getFirebaseConfig = () => {
  return {
    apiKey: 'AIzaSyC4zmhejsR9qEBlmCpufBQv64WpJgU2ANk',
    authDomain: 'live-chat-angular-eed62.firebaseapp.com',
    projectId: 'live-chat-angular-eed62',
    storageBucket: 'live-chat-angular-eed62.appspot.com',
    messagingSenderId: '687875374373',
    appId: '1:687875374373:web:444a1f63f0f1146ea3eecc',
    measurementId: 'G-QTTQYBDJDB',
  };
};

@NgModule({
  declarations: [
    AppComponent,
    MessageComponent,
    HeroComponent,
    MessagesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CommonModule,
    AngularFireModule.initializeApp(getFirebaseConfig()),
    AngularFireAuthModule,
    AngularFireStorageModule,
    AngularFirestoreModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
