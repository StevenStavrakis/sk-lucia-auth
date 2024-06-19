import { $ } from "bun"
import { Database } from "bun:sqlite"

await $`rm -rf dev.db`;

const db = new Database("dev.db", {
    create: true,
    readwrite: true
});

// create a table for user data
db.run("")

// what other table do we need for auth?
db.run("")

// already completed
// what field are we missing here?
// (not necessarily auth related)
db.run(`CREATE TABLE posts(
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    user_id TEXT NOT NULL,
    title TEXT NOT NULL,
    body TEXT NOT NULL,
    created_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    updated_at DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
)`)