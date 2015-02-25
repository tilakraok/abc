var config = {

    Database: {
                host: '192.168.1.141',
                port:27017,
                database: 'above'
              },
    http:{
            port: 8000,
          },
     option:{     
            uploadDir: '/Users/nirbhaykundan/projects/viewdeoadmin/public/image',
            tmpDir: '/Users/nirbhaykundan/projects/viewdeoadmin/public/tmp',
            maxPostSize: 11000000000,
            uploadUrl: '/public/image/',

          },
           imageVersions: {
    'thumbnail':{
      width: 80,
      height: 80
    },
  },
    
     path:
     {
      root:'/public/image',
      view:'/views',
      public:'/public',
     }     
  };

module.exports = config;