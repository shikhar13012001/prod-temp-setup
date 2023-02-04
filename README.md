[![Backup Sanity](https://github.com/shikhar13012001/prod-temp-setup/actions/workflows/backup-sanity.yaml/badge.svg)](https://github.com/shikhar13012001/prod-temp-setup/actions/workflows/backup-sanity.yaml)

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

curl -H "Authorization: Bearer skfXHj33aums2pMInqOotCJm782PvrrXKIs4AfHkSY3NcmCaiyvmcLvKS6NOhta3HyQVUw7YwFb57Le9Mh4GZdCxOBpiDOsJ9xWNwvTTrd6h46VhrCBpOWqn9eMvOIX99Z0z1gdTCvVrx6cUJwXlknqK8SmxpLGihSVFBv79xe9MgrPaHFOZ" https://u0v1th4q.api.sanity.io/v2021-06-07/data/export/production/> backup.ndjson

curl https://<projectId>.api.sanity.io/v2021-06-07/data/export/<dataset>?types=author,book > backup.ndjson