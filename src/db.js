import Dexie from 'dexie';

const db = new Dexie('Explorer');
db.version(1).stores({ 
  directories: '++id, name, directoryId',
  files: '++id, name, extension, buffer, directoryId' 
});

export default db;