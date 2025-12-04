export function NotFoundPage() {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <div className="text-center">
        <h1 className="mb-4 text-4xl font-bold">404</h1>
        <p className="mb-4 text-xl">Oops! Page not found</p>
        <a href="/" className="underline">
          Return to Home
        </a>
      </div>
    </div>
  );
};