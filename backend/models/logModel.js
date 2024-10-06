const db = require('../db/database');

const createLog = (log, callback) => {
  const query = `INSERT INTO logs (user_id, mood_rating, anxiety_level, sleep_hours, physical_activity, social_interactions, stress_level, symptoms) VALUES (?, ?, ?, ?, ?, ?, ?, ?)`;
  const values = [log.user_id, log.mood_rating, log.anxiety_level, log.sleep_hours, log.physical_activity, log.social_interactions, log.stress_level, log.symptoms];
  db.run(query, values, function (err) {
    if (err) return callback(err);
    callback(null, this.lastID);
  });
};

const getLogsByUser = (user_id, callback) => {
  db.all('SELECT * FROM logs WHERE user_id = ?', [user_id], (err, rows) => {
    if (err) return callback(err);
    callback(null, rows);
  });
};

module.exports = { createLog, getLogsByUser };
