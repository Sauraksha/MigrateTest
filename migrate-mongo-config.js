import 'dotenv/config'; // Automatically loads .env variables

export default {
  mongodb: {
    url: process.env.MONGO_URI, // Your MongoDB connection string from .env
    databaseName: "mtest",  // Your database name
    options: {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    },
  },
  migrationsDir: "migrations", // Directory for migration files
  changelogCollectionName: "changelog", // Collection for migration history
};
