# Aplicativo WMS (Front-End)

## Sobre o projeto

📱 Aplicação Mobile (React Native + Expo)

Esta etapa do projeto consiste no desenvolvimento de uma aplicação mobile em React Native utilizando Expo, com foco em dispositivos Android e geração de APK para uso operacional.

🎯 Objetivo

A aplicação tem como principal objetivo realizar a coleta de produtos durante o processo de carregamento de cargas, garantindo a validação do estoque com base nas informações do romaneio e da nota fiscal integrados ao ERP Senior por API e Webservices.

🔍 Funcionalidades
Leitura e coleta de produtos (manual ou via código de barras);
Validação dos itens com base no romaneio de carga;
Conferência de produtos conforme a nota fiscal;
Integração com o sistema WMS para verificação de estoque;
Identificação de divergências (faltas, excessos ou itens incorretos);
Registro das coletas em tempo real.
⚙️ Tecnologias
React Native
Expo (build para Android / APK)
Integração com APIs do WMS
🎯 Resultado Esperado
Maior precisão no processo de carregamento;
Redução de erros operacionais;
Agilidade na conferência de mercadorias;
Garantia de consistência entre estoque físico e sistema.

```bash
PRODUÇÃO: SRV-WEB-INT: 192.168.1.4
HOMOLOGAÇÃO: SRV-WEB-INT-HOMOL: 192.168.1.109
```

## Foi utilizado as seguintes tecnologias:

### Framework React Native com Expo
```bash
  📚 [Expo](https://expo.dev/)
  🌐 [React Native](https://reactnative.dev/)
```

### Dependencias para instalar o projeto
```bash
yarn
Expo
React Native
```

### Como iniciar o projeto
```bash
1 - yarn start
2 - press W
```

### Como realizar o build do projeto
Irá realizar o upload para a sua conta Expo, lá será gerado o APK e disponibilizado o link para download.

```bash
eas build -p android --profile preview
```

### Estrutura de Arquivos
A estrutura de arquivos está da seguinte maneira:

```bash
📂 WMS
├── 📂 assets/
├── 📂 services/
│   ├── 🌐 api.tsx
├── 📂 components/
│   ├── 🌐 HeaderBarPages.tsx
│   ├── 🌐 HeaderBarStg.tsx
└── 📂 pages/
   ├── 🌐 Login.tsx
   ├── 🌐 Settings.tsx
   ├── 🌐 Index.tsx
   ├── 🌐 PalletReceivement.tsx
   ├── 🌐 PalletAddress.tsx
   ├── 🌐 QueryAddressFreedom.tsx
   ├── 🌐 QueryAddressProducts.tsx
   ├── 🌐 QueryProdutcsAddress.tsx
   ├── 🌐 PalletReprint.tsx
   ├── 🌐AddressPrint.tsx

```
