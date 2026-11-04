import { AuthRepository } from './auth.repository';

export class AuthService {
  private authRepository: AuthRepository;

  constructor() {
    this.authRepository = new AuthRepository();
  }

  /**
   * Mengecek status ketersediaan email sesuai Auth Spec Posnod:
   * - Jika terdaftar -> Frontend melanjutkan ke input password
   * - Jika belum terdaftar -> Frontend memunculkan popup konfirmasi registrasi
   */
  async checkEmail(email: string) {
    // Validasi format email dasar
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || !emailRegex.test(email)) {
      throw new Error('Format email tidak valid');
    }

    const normalizedEmail = email.trim().toLowerCase();
    const existingUser = await this.authRepository.findByEmail(normalizedEmail);

    if (existingUser) {
      return {
        email: existingUser.email,
        isRegistered: true,
        isEmailVerified: existingUser.isEmailVerified,
        hasProAccess: existingUser.hasProAccess,
      };
    }

    return {
      email: normalizedEmail,
      isRegistered: false,
    };
  }
}
