import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUpPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSignUp = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('http://localhost:3001/api/users', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Erfolgreich registriert → zur Anmeldung weiterleiten
        navigate('/signin');
      } else {
        const data = await response.json();
        setError(data.message || 'Registrierung fehlgeschlagen.');
      }
    } catch (err) {
      setError('Serverfehler bei der Registrierung.');
    }
  };

  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded shadow">
      <h2 className="text-xl font-bold mb-4">Sign Up</h2>
      <form onSubmit={handleSignUp} className="space-y-4">
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
          Registrieren
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </div>
  );
}
