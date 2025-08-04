/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export', // This tells Next.js to build a static site
    images: {
      unoptimized: true // Disable image optimization
    }
  };
  
  export default nextConfig;
  