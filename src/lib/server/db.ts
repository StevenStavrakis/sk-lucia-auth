import { Database } from "bun:sqlite"

export const db = new Database("dev.db", {
    readwrite: true
})