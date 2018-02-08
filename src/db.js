import Dexie from 'dexie';

const db = new Dexie('Explorer');
db.version(1).stores({ files: '++id, name' });

export default db;