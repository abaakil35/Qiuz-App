import { Link } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

export default function Home() {
  const { user } = useAuth();

  const features = [
    {
      title: 'Interactive Quizzes',
      description: 'Engage with dynamic questions and real-time feedback',
      icon: '📝'
    },
    {
      title: 'Track Progress',
      description: 'Monitor your performance and improve over time',
      icon: '📊'
    },
    {
      title: 'Admin Dashboard',
      description: 'Create and manage quizzes with ease',
      icon: '⚙️'
    }
  ];

  return (
    <div className="relative min-h-screen">
      {/* Hero Section without Background Image */}
      <div className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-white">
        {/* Centered Content */}
        <div className="relative z-10 flex flex-col items-center justify-center w-full px-4 py-32">
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-gray-900 text-center mb-6 drop-shadow-lg">
            Welcome to QuizApp
          </h1>
          <p className="text-lg sm:text-xl text-gray-700 text-center mb-10 max-w-2xl drop-shadow">
            Test your knowledge, challenge your friends, and learn something new every day
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            {!user ? (
              <>
                <Link
                  to="/register"
                  className="px-8 py-3 rounded-md bg-indigo-600 text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200 text-center"
                >
                  Get Started
                </Link>
                <Link
                  to="/login"
                  className="px-8 py-3 rounded-md bg-white text-indigo-700 font-semibold text-lg shadow-lg hover:bg-gray-100 transition-colors duration-200 text-center"
                >
                  Register
                </Link>
              </>
            ) : (
              <Link
                to="/quiz"
                className="px-8 py-3 rounded-md bg-indigo-600 text-white font-semibold text-lg shadow-lg hover:bg-indigo-700 transition-colors duration-200 text-center"
              >
                Start Quiz
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className="relative bg-white/80 backdrop-blur-sm py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-indigo-600">Why Choose Us</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Everything you need to test your knowledge
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Our platform offers a comprehensive solution for both quiz takers and administrators.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {features.map((feature) => (
                <div key={feature.title} className="flex flex-col items-center text-center bg-white/50 backdrop-blur-sm p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <dt className="text-base font-semibold leading-7 text-gray-900">
                    {feature.title}
                  </dt>
                  <dd className="mt-2 text-base leading-7 text-gray-600">
                    {feature.description}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="relative bg-indigo-50/80 backdrop-blur-sm">
        <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
          <div className="relative isolate overflow-hidden bg-gradient-to-r from-indigo-600 to-purple-600 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16">
            <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to test your knowledge?
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-8 text-indigo-200">
              Join our community of learners and start your journey today.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              {user ? (
                <Link
                  to="/quiz"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
                >
                  Start Quiz
                </Link>
              ) : (
                <Link
                  to="/register"
                  className="rounded-md bg-white px-6 py-3 text-lg font-semibold text-indigo-600 shadow-sm hover:bg-indigo-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-all duration-200"
                >
                  Get started
                </Link>
              )}
            </div>
            <svg
              viewBox="0 0 1024 1024"
              className="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 -translate-y-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
              aria-hidden="true"
            >
              <circle cx={512} cy={512} r={512} fill="url(#gradient)" fillOpacity="0.7" />
              <defs>
                <radialGradient id="gradient">
                  <stop stopColor="#7775D6" />
                  <stop offset={1} stopColor="#E935C1" />
                </radialGradient>
              </defs>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}