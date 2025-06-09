import { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import axios from 'axios';
import API_BASE_URL from '../config';

export default function QuizHistory() {
  const [history, setHistory] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();

  useEffect(() => {
    fetchHistory();
  }, []);

  const fetchHistory = async () => {
    try {
      setLoading(true);
      const endpoint = user.role === 'admin'
        ? `${API_BASE_URL}/quiz/history/all`
        : `${API_BASE_URL}/quiz/history`;
      const response = await axios.get(endpoint);
      setHistory(response.data);
    } catch (err) {
      setError('Failed to load quiz history');
      console.error('Error fetching history:', err);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-indigo-600 mx-auto"></div>
          <p className="mt-4 text-gray-600">Loading history...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-6">
        {user.role === 'admin' ? 'All Quiz History' : 'My Quiz History'}
      </h2>

      {error && (
        <div className="rounded-md bg-red-50 p-4 mb-6">
          <div className="text-sm text-red-700">{error}</div>
        </div>
      )}

      {history.length === 0 ? (
        <p className="text-gray-500 text-center py-8">
          No quiz history found.
        </p>
      ) : (
        <div className="bg-white shadow overflow-hidden sm:rounded-md">
          <ul className="divide-y divide-gray-200">
            {history.map((entry) => (
              <li key={entry._id} className="px-4 py-4 sm:px-6">
                <div className="flex items-center justify-between">
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-indigo-600 truncate">
                      {user.role === 'admin' ? entry.user.username : 'Quiz'} - {entry.quiz.title}
                    </p>
                    <p className="mt-2 flex items-center text-sm text-gray-500">
                      <span className="truncate">
                        Score: {entry.score}/{entry.totalQuestions} |
                        Date: {new Date(entry.date).toLocaleDateString()}
                      </span>
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}