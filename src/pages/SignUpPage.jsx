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
 const data = await response.json();
      if (response.ok) {
        // Erfolgreich registriert → zur Anmeldung weiterleiten
        navigate('/signin');
        
      } else  {
      if ( response.status === 409){
 setError( 'Benutzer  existiert , Sie müssen anmelden.');
      }else if (response.status === 400) {
          setError(` ${data.error || 'Ungültige Eingabe.'}`);
        }
        else {
          setError(data.error || ' Registrierung fehlgeschlagen.');
        }
    
       
      }
    } catch (err) {
      setError('Serverfehler bei der Registrierung.');
      console.log(err)
    }
  };

  return (
    <div className="justify-center mt-20 rounded-2xl p-6 max-w-sm mx-auto bg-white/70 backdrop-blur-md  shadow">
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
          className="w-full bg-blue-500 text-white py-2 rounded hover:bg-orange-800"
        >
          Registrieren
        </button>
        {error && <p className="text-red-600 text-sm">{error}</p>}
      </form>
    </div>
  );
}
