const path = require('path');

module.exports = {
    mode:'development',
    entry: './src/index.js', //Punto de entrada de la aplicacion
    output:{
        filename:'bundle.js', // Nombre del archivo de salida
        path: path.resolve(__dirname, 'dist'), //Carpeta de salida 
     },
     module:{
        rules:[
            {
                test: /\.css$/, //Regex para indentificar archivos CSS
                use:['style-loader', 'css-loader'], //Loaders para procesar archivos CSS
            },
            {
                test: /\.js$/, // Regex para identificar archivos JS
                exclude: /node_modules/, //Excluir la carpeta node_modules
                use: {
                    loader: 'babel-loader', //Loader para pasar JS moderno a JS mas antiguo
                    options: {
                        presets: ['@babel/preset-env'],
                    },
                },
            },
        ] ,
     },
     devtool:'source-map', // Generar source maps para facilitar la depuracion 
     devServer:{
        static: {
            directory: path.resolve(__dirname,'dist'),
        },
        compress: true, //Habilitar la comprension gzip
        port: 9000, // Puerto del servidor de desarollo 
     },
};

