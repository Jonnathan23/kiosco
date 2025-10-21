This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```


# Comandos Prisma

Instalación de dependencias

```bash
npm i @prisma/client
npm i -D prisma
```

## Crear el archivo prisma

```bash
npx prisma init 
```


## Realizar migraciones

En caso de tener permisos de SUPERUSER en base de datos utilizar

```bash
npx prisma migrate dev
```

En caso de no poser permisos y utilizar plataformas como Render utilizar

```bash
npx prisma db push
```

## Insertar datos

Antes de insertar datos de forma masiva con el ``seed.ts`` es necesario crel el client
```bash
npx prisma generate
```