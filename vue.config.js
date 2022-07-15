// module.exports = {
//   /*publicPath: process.env.NODE_ENV === "production" ? "/pedidos-resto-vue" : "/"*/
//   publicPath: process.env.NODE_ENV === 'production'
//     ? '/' + process.env.CI_PROJECT_NAME + '/'
//     : '/'
// };
module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
  ? '/'
  : '/prueba-github-page'
}
