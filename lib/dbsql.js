// lib/db.js
import Database from 'better-sqlite3';
import path from 'path';

let db = null;

export function getDb() {
  if (!db) {
    db = new Database(path.resolve('./data/corpdigital.db'), { verbose: console.log });
  }
  return db;
}
