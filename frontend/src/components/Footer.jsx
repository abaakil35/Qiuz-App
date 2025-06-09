export default function Footer() {
  return (
    <footer className="bg-white border-t">
      <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0">
          <div className="text-center sm:text-left">
            <h3 className="text-lg font-semibold text-indigo-600">QuizMaster</h3>
            <p className="mt-1 text-sm text-gray-500">
              Empowering knowledge through interactive learning
            </p>
          </div>
          <div className="flex flex-col items-center space-y-2 sm:flex-row sm:space-y-0 sm:space-x-4">
            <a href="https://ikenas.com" className="text-sm text-gray-500 hover:text-gray-700">
              About Us
            </a>
            <a href="https://ikenas.com" className="text-sm text-gray-500 hover:text-gray-700">
              Contact
            </a>

          </div>
        </div>
        <div className="mt-6 border-t border-gray-200 pt-6">
          <p className="text-center text-sm text-gray-500">
            © {new Date().getFullYear()} QuizApp. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}