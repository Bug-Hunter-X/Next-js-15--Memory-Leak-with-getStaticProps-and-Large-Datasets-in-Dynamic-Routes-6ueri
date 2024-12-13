# Next.js 15 Memory Exhaustion Bug

This repository demonstrates a potential memory exhaustion issue in Next.js 15 when using `getStaticProps` with dynamic routes and large datasets. The bug occurs because Next.js attempts to pre-render all possible route variations, which can lead to significant resource consumption.

## Bug Description

When using `getStaticProps` with a dynamic route containing a large number of possible segments, Next.js might exhaust available memory during the build process. This results in excessively long build times and, in extreme cases, runtime errors.

## Solution

The provided solution demonstrates an approach to mitigate this issue by adopting incremental static regeneration or switching to `getServerSideProps` for dynamically fetching content.