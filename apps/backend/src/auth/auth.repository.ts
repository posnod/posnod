import { eq } from 'drizzle-orm';
import db from '../db/index';
import { users, User } from '../db/schema';

export class AuthRepository {
  /**
   * Mencari user berdasarkan alamat email
   */
  async findByEmail(email: string): Promise<User | null> {
    const result = await db
      .select()
      .from(users)
      .where(eq(users.email, email))
      .limit(1);

    return result[0] ?? null;
  }
}
