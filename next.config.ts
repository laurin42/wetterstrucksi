import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['http://192.168.178.67:3000'],
  images: {
    remotePatterns: [
{
  protocol: "https",
  hostname: "wetterstrucksi.de",
  pathname: "/**"
},
{
  protocol: "https",
  hostname: "static.ghost.org",
  pathname: "/**",
},
{
  protocol: "http",
  hostname: "ghost-2368-aks0og0w48s88o4cccw4wog0.152.53.139.218.sslip.io",
  pathname: "/**",
},
{ 
  protocol: "http",
  hostname: "192.168.178.67",
  port: "2368",
  pathname: "/content/images/**",
},
  ],
  },
};

export default nextConfig;
