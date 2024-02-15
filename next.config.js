// next.config.js

module.exports = {
  async redirects() {
    return [
      {
        source: '/',
        destination: '/login',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['i.pravatar.cc'],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ['@svgr/webpack'],
    });

    return config;
  },
};





// module.exports = {
//     images: {
//       domains: ['i.pravatar.cc'],
//     },
//     webpack(config) {
//       config.module.rules.push({
//         test: /\.svg$/,
//         use: ["@svgr/webpack"],
//       });
  
//       return config;
//     },
//   };
  