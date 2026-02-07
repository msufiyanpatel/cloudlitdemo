// module.exports = function (api) {
//     return {
//       plugins: ['macros'],
//     }
//   }
module.exports= function(api) {
    api.cache(true); // Cache the configuration indefinitely
  
    return {
      presets: [
        // Add your preset configurations here
      ],
      plugins: ['macros'
        // Add your plugin configurations here
      ],
    };
  };