const dbName = 'meu-db';
const dbVersion = 2; 
let db: IDBDatabase;

export const openDB = (): Promise<IDBDatabase> => {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open(dbName, dbVersion);

    request.onerror = (event) => {
      reject(event);
    };

    request.onsuccess = (event) => {
      db = (event.target as IDBOpenDBRequest).result;
      resolve(db);
    };

    request.onupgradeneeded = (event) => {
      console.log('Criando object store favoritos')
      db = (event.target as IDBOpenDBRequest).result;
      
      
      if (!db.objectStoreNames.contains('favoritos')) {
        const store = db.createObjectStore('favoritos', { keyPath: 'id' });
        store.createIndex('id', 'id', { unique: true });
      }
    };
  });
  
};