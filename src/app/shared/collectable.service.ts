import { Collectable } from './collectable.model';

export class CollectableService {

  private collectables: Collectable[] = [
    { description: 'A very rare copy of "jQuery for Dummies"' , type: 'Book'},
    { description: 'The first Letter ever written' , type: 'Piece of paper'},
    { description: 'A photograph showing nothing' , type: 'Photo'},
    { description: 'A box with all sold zunes' , type: 'Garbage'}
  ];

  private collection: Collectable[] = [];

  /* Methods */
  getCollectables() {
    return this.collectables;
  }

  getCollection() {
    return this.collection;
  }

  addToCollection(item: Collectable) {
    if( this.collection.indexOf(item) !== -1 )
      return;

    this.collection.push(item);
  }

  removeFromCollection(item: Collectable) {
    this.collection.splice(this.collection.indexOf(item), 1);
  }
}
