import axios from "axios";
// Exportação da API
const api = axios.create({
  baseURL: "https://controle-de-acesso-backend-production.up.railway.app/",
});

 //Verificação do token para o usuario acessar aplicação
  // api.interceptors.request.use(async (config) => {
  //   const userData = await localStorage.getItem("acesso4bimec:users");
  //   const token = userData && JSON.parse(userData).token;
  //   config.headers.authorization = `Bearer ${token}`;

  //   return config;
  // });

export default api;
