# Gunakan node.js resmi sebagai base image
FROM node:22

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Instal dependencies
RUN npm install

# Salin semua file ke dalam container
COPY . .

# Expose port untuk aplikasi backend
EXPOSE 5000

# Jalankan aplikasi Express
CMD ["node", "index.js"]
