import { describe, it, expect, beforeEach } from '@jest/globals';
import request from 'supertest';
import app from '../src/app';
import { AuthService } from '../src/auth/auth.service';

describe('Auth Module Unit & Integration Tests', () => {
  describe('AuthService - checkEmail', () => {
    let authService: AuthService;

    beforeEach(() => {
      authService = new AuthService();
    });

    it('harus melempar error jika format email tidak valid', async () => {
      await expect(authService.checkEmail('bukan-email')).rejects.toThrow(
        'Format email tidak valid'
      );
    });

    it('harus mengembalikan isRegistered: false jika email belum terdaftar', async () => {
      // Gunakan email random yang pasti belum ada di database
      const randomEmail = `unregistered_${Date.now()}@posnod.com`;
      const result = await authService.checkEmail(randomEmail);

      expect(result).toHaveProperty('email', randomEmail);
      expect(result).toHaveProperty('isRegistered', false);
    });
  });

  describe('API Endpoint - POST /api/auth/check-email', () => {
    it('harus mengembalikan 400 jika email kosong', async () => {
      const response = await request(app)
        .post('/api/auth/check-email')
        .send({});

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body).toHaveProperty('message', 'Email wajib diisi');
    });

    it('harus mengembalikan 400 jika format email tidak valid', async () => {
      const response = await request(app)
        .post('/api/auth/check-email')
        .send({ email: 'salah-format' });

      expect(response.status).toBe(400);
      expect(response.body).toHaveProperty('success', false);
      expect(response.body.message).toContain('Format email tidak valid');
    });

    it('harus mengembalikan 200 dan data isRegistered: false jika email belum terdaftar', async () => {
      const randomEmail = `test_${Date.now()}@posnod.com`;
      const response = await request(app)
        .post('/api/auth/check-email')
        .send({ email: randomEmail });

      expect(response.status).toBe(200);
      expect(response.body).toHaveProperty('success', true);
      expect(response.body.data).toHaveProperty('email', randomEmail);
      expect(response.body.data).toHaveProperty('isRegistered', false);
    });
  });
});
