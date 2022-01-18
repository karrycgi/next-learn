This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.tsx`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.ts`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.


## Integrating Red Notice API Module

npx yarn add git+https://github.com/karrycgi/next-learn-red-notice-api.git
```um neue Versionen des moduls zu integrieren, muss das add neu ausgeführt werden, da die Version in yarn.lock festgelegt ist```

## Steps for creating a Module in Typescript

```In diesem Projekt wird ein custom modul integriert. Siehe für kurze Beschreibung zum Erstellen eines Moduls folgend: ```

npx yarn add --dev typescript ```dev dependency typescript hinzufügen```

npx tsc --init ```in der tsconfig.json output directory definieren und definitions mit aktivieren```
tsc ```danach in der package.json das build script mit einbauen```
```danach das main auf die generierte index.js und für die types die type propertys auf index.d.ts festlegen```



