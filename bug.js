In Next.js 15, an uncommon bug can occur when using the `getStaticProps` or `getServerSideProps` functions in conjunction with dynamic routes and large datasets.  The issue manifests as an unexpectedly long build time or runtime errors related to memory exhaustion.  This happens because Next.js attempts to pre-render every possible variation of your dynamic route, causing it to consume significant resources when dealing with a large number of dynamic segments.

```javascript
// pages/blog/[slug].js
export async function getStaticProps({ params }) {
  const res = await fetch(`https://api.example.com/blog/${params.slug}`);
  const data = await res.json();
  return { props: { data } };
}
```