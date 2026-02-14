# Data Fetch Lab

A practical laboratory for studying and comparing modern data fetching strategies in React and Next.js.

## 🎯 Goals

This repository explores different approaches to data fetching, caching, and synchronization in modern React applications.

It is designed to be:

- educational
- practical
- extensible
- contributor-friendly

---

## 🧱 Tech Stack

- Next.js (App Router)
- React
- TypeScript
- Fetch API
- Axios
- TanStack Query
- SWR
- Zod
- MSW (Mock Service Worker)

---

## 📚 Techniques Covered

### Fundamentals

- Basic fetch
- Async/Await
- Error handling
- Loading states
- AbortController

### Intermediate

- Parallel requests
- Dependent requests
- Polling
- Retry logic
- Request deduplication

### Advanced (React & Next.js)

- Server Components fetching
- Streaming & Suspense
- Incremental Static Regeneration (ISR)
- Edge runtime fetching

### Libraries

- Axios
- SWR
- TanStack Query
- ky

---

## 🧪 Running the Project

```bash
npm install
npm run dev
```

Visit:

http://localhost:3000

📁 Examples

Each route demonstrates a specific fetching strategy:

/fetch-basic
/abort-controller
/parallel-fetch
/server-components
/swr
/react-query

🤝 Contributing

Contributions are welcome!

data-fetch-lab/
│
├── public/
│
├── src/
│ ├── app/
│ │ ├── layout.tsx
│ │ ├── page.tsx
│ │ ├── providers.tsx
│ │ └── (examples)/
│ │ ├── fetch-basic/
│ │ ├── async-await/
│ │ ├── abort-controller/
│ │ ├── axios/
│ │ ├── parallel-fetch/
│ │ ├── dependent-fetch/
│ │ ├── suspense/
│ │ ├── server-components/
│ │ ├── streaming/
│ │ └── react-query/ ← futuramente
│ │
│ ├── components/
│ │ ├── ui/
│ │ │ ├── Loader.tsx
│ │ │ ├── ErrorMessage.tsx
│ │ │ └── Container.tsx
│ │ └── product/
│ │ ├── ProductCard.tsx
│ │ └── ProductList.tsx
│ │
│ ├── hooks/
│ │ ├── fetch/
│ │ │ ├── useFetch.ts
│ │ │ ├── useAbortableFetch.ts
│ │ │ ├── usePolling.ts
│ │ │ └── useParallelFetch.ts
│ │ └── react-query/
│ │ └── useProductsQuery.ts
│ │
│ ├── lib/
│ │ ├── api/
│ │ │ ├── client.ts
│ │ │ ├── endpoints.ts
│ │ │ └── fetcher.ts
│ │ │
│ │ ├── axios/
│ │ │ └── axiosInstance.ts
│ │ │
│ │ └── utils/
│ │ ├── sleep.ts
│ │ └── logger.ts
│ │
│ ├── types/
│ │ ├── product.ts
│ │ └── api.ts
│ │
│ ├── mocks/
│ │ ├── handlers.ts
│ │ └── browser.ts
│ │
│ ├── constants/
│ │ └── routes.ts
│ │
│ └── styles/
│
├── .env.example
├── README.md
└── package.json
