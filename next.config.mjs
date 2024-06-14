/** @type {import('next').NextConfig} */
const nextConfig = {
  redirects: async () => [
    { source: "/admin", destination: "/admin/index.html", permanent: false },
  ],
};

export default nextConfig;
