const sqlite3 = require('sqlite3').verbose();

// Connect to a file-based SQLite database called logs.db
const db = new sqlite3.Database('./logs.db', (err) => {
  if (err) {
    console.error('Error opening database', err.message);
  } else {
    console.log('Connected to the SQLite database.');
    // Run schema creation query if it doesn't exist
    db.run(`CREATE TABLE IF NOT EXISTS logs (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      user_id TEXT NOT NULL,
      mood_rating INTEGER,
      anxiety_level INTEGER,
      sleep_hours REAL,
      physical_activity TEXT,
      social_interactions INTEGER,
      stress_level INTEGER,
      symptoms TEXT,
      created_at DATE DEFAULT (datetime('now'))
    )`);
  }
});

module.exports = db;
