FROM node:16-bullseye AS build
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
RUN npm run build -- --configuration production


#-------------------------------stage2---------------------------------------

FROM nginx:alpine AS runtime
COPY --from=build /app/dist/angular-demo-code /usr/share/nginx/html
EXPOSE 80
CMD ["nginx","-g","daemon off;"]
