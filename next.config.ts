import { NextConfig } from 'next';

const nextConfig: NextConfig = {
  allowedDevOrigins: ['http://192.168.178.67:3000', 'https://192.168.178.67:3000' ],
  images: {
    remotePatterns: [
{
  protocol: "https",
  hostname: "wetterstrucksi.de",
  pathname: "/cms/content/images/**"
},
{
  protocol: "https",
  hostname: "wetterstrucksi.de",
  pathname: "/content/images/**"
},
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
  hostname: "ghost-d8o044w8wgsc0c4w0gg4ks4g.152.53.139.218.sslip.io",
  pathname: "/**",
},
{
  protocol: "https",
  hostname: "cms.wetterstrucksi.de",
  pathname: "/**"
},
  ],
  
  loader: "default",

  },
};

export default nextConfig;
