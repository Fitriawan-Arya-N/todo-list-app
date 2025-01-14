# Gunakan node.js resmi sebagai base image
FROM node:22 AS build

# Set working directory di dalam container
WORKDIR /usr/src/app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Instal dependencies
RUN npm install

# Salin semua file ke dalam container
COPY . .

# Jalankan aplikasi Express
CMD [ "node", "index.js" ]
