# Usa una imagen con Node.js
FROM node:18

# Establece el directorio de trabajo
WORKDIR /app

# Copia el package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el código fuente
COPY . .

# Expone el puerto 3000
EXPOSE 3000

# Inicia el servidor de desarrollo
CMD ["npm", "run", "dev"]
