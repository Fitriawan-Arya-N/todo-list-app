# Gunakan image node.js resmi sebagai base image
FROM node:22 AS build

# Set working directory di dalam container
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Instal dependencies
RUN npm install

# Salin semua file ke dalam container
COPY . .

# Build aplikasi React
RUN npm run build

# Gunakan image Nginx untuk men-deploy hasil build React
FROM nginx:alpine

# Salin hasil build React ke dalam folder nginx
COPY --from=build /app/build /usr/share/nginx/html

# Expose port untuk mengakses aplikasi
EXPOSE 80

# Jalankan Nginx
CMD ["nginx", "-g", "daemon off;"]
