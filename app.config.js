export default {
  expo: {
    name: "seu-app",
    // ... outras configurações do Expo
    extra: {
      apiUrl: process.env.API_URL || "http://192.168.0.111:8080",
    },
  },
}; 