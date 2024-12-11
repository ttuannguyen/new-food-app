import sql from 'better-sqlite3';

const db = sql('meals.db');

export function getMeals() {
    db.prepare('SELECT * FROM meals').all();
}