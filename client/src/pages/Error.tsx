import { Link } from 'react-router-dom'

const Error = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#f5f5f3] px-4 text-center">
      <h1 className="text-7xl sm:text-9xl font-bold text-[#040B74] mb-4">404</h1>
      <h2 className="text-2xl sm:text-3xl font-semibold text-[#18234A] mb-4">Page Not Found</h2>
      <p className="text-base sm:text-lg text-[#000000B0] max-w-md mb-8">
        The page you're looking for doesn't exist or has been moved.
      </p>
      <Link
        to="/"
        className="inline-flex items-center justify-center px-8 h-14 rounded-[25px] text-[#FFFFFF] font-semibold text-base sm:text-lg transition-all duration-300 hover:scale-105 hover:shadow-lg active:scale-95"
        style={{ background: 'linear-gradient(90deg,#F39B1F 15.87%,#18234A 81.25%,#110341 100%)' }}
      >
        Back to Home
      </Link>
    </div>
  )
}

export default Error
