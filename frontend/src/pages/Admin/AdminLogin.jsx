import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';
import Logo from '../../components/Logo';
import Wrapper from '../../assets/wrappers/AdminPageWrappers/AdminLoginWrapper';

export default function AdminLogin() {
  const [email, setEmail] = useState('admin@example.com');
  const [password, setPassword] = useState('StrongPass123!');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const auth = useAuth();
  const nav = useNavigate();

  async function submit(e) {
    e.preventDefault();
    setError('');
    setLoading(true);

    try {
      await auth.login(email, password);
      nav('/admin/dashboard');
    } catch (err) {
      setError('Invalid email or password. Please try again.');
    } finally {
      setLoading(false);
    }
  }

  return (
    <Wrapper>
      <div className='login-container'>
        <div className='login-card'>
          <div className='logo-section'>
            <Logo isSticky={true} />
            <h1 className='title'>Admin Portal</h1>
            <p className='subtitle'>Sign in to manage your content</p>
          </div>

          {error && <div className='error-message'>{error}</div>}

          <form onSubmit={submit} className='login-form'>
            <div className='form-group'>
              <label htmlFor='email'>Email Address</label>
              <input
                id='email'
                type='email'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder='admin@example.com'
                required
                disabled={loading}
              />
            </div>

            <div className='form-group'>
              <label htmlFor='password'>Password</label>
              <input
                id='password'
                type='password'
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder='Enter your password'
                required
                disabled={loading}
              />
            </div>

            <button type='submit' className='submit-btn' disabled={loading}>
              {loading ? 'Signing in...' : 'Sign In'}
            </button>
          </form>

          <div className='login-footer'>
            <p>Secure Admin Access</p>
          </div>
        </div>
      </div>
    </Wrapper>
  );
}
