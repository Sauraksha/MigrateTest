export async function up(db, client) {
    // Logic for migration up
    console.log("Migration up executed");
    // Example: Insert a document into a collection
    await db.collection('users').insertOne({ name: 'sauraksha' });
  }
  
  export async function down(db, client) {
    // Logic for migration down
    console.log("Migration down executed");
    // Example: Remove the inserted document
    await db.collection('users').deleteOne({ name: 'harshad' });
  }
  