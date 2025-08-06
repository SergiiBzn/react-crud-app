import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        const data = await response.json();
        localStorage.setItem('apiToken', data.token);
        navigate ('/'); // Erfolgreich eingeloggt
      } else {
        const data = await response.json();
        setError(data.message || 'Anmeldung fehlgeschlagen.');
      }
    } catch (err) {
      setError('Serverfehler bei der Anmeldung.');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign In</h2>
      <form onSubmit={handleSignIn} className="space-y-4">
        <input
          type="email"
          placeholder="E-Mail"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <input
          type="password"
          placeholder="Passwort"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="w-full border px-3 py-2 rounded"
        />
        <button
          type="submit"
          className="w-full bg-yellow-900 text-white py-2 rounded hover:bg-orange-800"
        >
          Anmelden
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </div>
  );
}
