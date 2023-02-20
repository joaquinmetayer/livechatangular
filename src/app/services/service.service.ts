import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentChangeAction } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private messagesCollection: AngularFirestoreCollection<any>;

  constructor(private firestore: AngularFirestore) {
    this.messagesCollection = firestore.collection('messages');
  }

  getMessages(): Observable<any[]> {
    return this.messagesCollection.snapshotChanges().pipe(
      map((actions: DocumentChangeAction<any>[]) => {
        return actions.map((a: DocumentChangeAction<any>) => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
  }
}



