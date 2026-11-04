import { Request, Response } from 'express';
import { AuthService } from './auth.service';

export class AuthController {
  private authService: AuthService;

  constructor() {
    this.authService = new AuthService();
  }

  /**
   * Endpoint handler untuk POST /api/auth/check-email
   */
  checkEmail = async (req: Request, res: Response): Promise<void> => {
    try {
      const { email } = req.body;

      if (!email) {
        res.status(400).json({
          success: false,
          message: 'Email wajib diisi',
        });
        return;
      }

      const result = await this.authService.checkEmail(email);

      res.status(200).json({
        success: true,
        message: result.isRegistered
          ? 'Email sudah terdaftar. Silakan masukkan password.'
          : 'Email belum terdaftar. Silakan lanjutkan pendaftaran.',
        data: result,
      });
    } catch (error: unknown) {
      const message =
        error instanceof Error
          ? error.message
          : 'Terjadi kesalahan saat memeriksa email';

      res.status(400).json({
        success: false,
        message,
      });
    }
  };
}
