/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./utils/schema.tsx",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:zle8DNgm0WSy@ep-wispy-shape-a5bk9zwc-pooler.us-east-2.aws.neon.tech/neondb?sslmode=require',

    }
  };
  
