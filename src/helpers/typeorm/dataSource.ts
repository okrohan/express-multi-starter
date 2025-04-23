import "reflect-metadata"; // Required for TypeORM to function properly
import { DataSource } from "typeorm";
import { TYPE_ORM_ENTITIES } from "../../models";

export const AppDataSource =  new DataSource({
    type: "postgres",        // Database type (e.g., postgres, mysql, sqlite)
    host: "localhost",       // Database host
    port: 5432,              // Database port (default PostgreSQL is 5432)
    username: "user",        // Your database username
    password: "password",    // Your database password
    database: "mydb",        // Your database name
    entities: TYPE_ORM_ENTITIES,        // Array of entities used in the project
    synchronize: true,       // Synchronize the database schema on every application launch
    logging: true,           // Enable SQL query logging for debugging
});

export const connectToDatabase = async () => {
    try {
        await AppDataSource.initialize();
        console.log("Database connection established.");
        return AppDataSource;
    } catch (error) {
        console.error("Error connecting to the database", error);
        throw new Error("Database connection failed");
}
};