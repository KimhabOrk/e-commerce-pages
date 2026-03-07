import createNextIntlPlugin from 'next-intl/plugin';

/** @type {import("next").NextConfig} */

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default withNextIntl(nextConfig)
