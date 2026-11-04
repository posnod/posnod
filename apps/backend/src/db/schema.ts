import { mysqlTable, varchar, boolean, timestamp, mysqlEnum } from 'drizzle-orm/mysql-core';
import crypto from 'node:crypto';

/**
 * Tabel Users - Menyimpan identitas akun utama Posnod (Single Identity).
 */
export const users = mysqlTable('users', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  email: varchar('email', { length: 255 }).notNull().unique(),
  password: varchar('password', { length: 255 }), // Nullable untuk akun yang login murni via OAuth (Google, Apple, X)
  isEmailVerified: boolean('is_email_verified').default(false).notNull(),
  status: mysqlEnum('status', ['active', 'suspended', 'pending_verification'])
    .default('pending_verification')
    .notNull(),
  hasProAccess: boolean('has_pro_access').default(false).notNull(),
  targetPreference: mysqlEnum('target_preference', ['media', 'pro+'])
    .default('media')
    .notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
  updatedAt: timestamp('updated_at').defaultNow().onUpdateNow().notNull(),
});

/**
 * Tabel Email Verifications - Menyimpan token verifikasi email setelah pendaftaran.
 */
export const emailVerifications = mysqlTable('email_verifications', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: varchar('user_id', { length: 36 })
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  token: varchar('token', { length: 255 }).notNull().unique(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

/**
 * Tabel Sessions - Menyimpan sesi login aktif, perangkat, dan token refresh (Account Center).
 */
export const sessions = mysqlTable('sessions', {
  id: varchar('id', { length: 36 })
    .primaryKey()
    .$defaultFn(() => crypto.randomUUID()),
  userId: varchar('user_id', { length: 36 })
    .notNull()
    .references(() => users.id, { onDelete: 'cascade' }),
  refreshToken: varchar('refresh_token', { length: 500 }).notNull(),
  device: varchar('device', { length: 100 }),
  browser: varchar('browser', { length: 100 }),
  os: varchar('os', { length: 100 }),
  ipAddress: varchar('ip_address', { length: 45 }),
  isActive: boolean('is_active').default(true).notNull(),
  lastActiveAt: timestamp('last_active_at').defaultNow().notNull(),
  expiresAt: timestamp('expires_at').notNull(),
  createdAt: timestamp('created_at').defaultNow().notNull(),
});

// Type definitions untuk inferensi TypeScript
export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type EmailVerification = typeof emailVerifications.$inferSelect;
export type NewEmailVerification = typeof emailVerifications.$inferInsert;

export type Session = typeof sessions.$inferSelect;
export type NewSession = typeof sessions.$inferInsert;
