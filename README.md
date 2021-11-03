This is a light TypeScript wrapper around [Wox](https://wox.one).

Implement a handler by implementing interface `IWoxQueryHandler`, then instantiate and run a processor using:

```ts
const processor = new WoxQueryProcessor(handler, logger);
processor.processFromCommandLineAsync(process.argv)
  .then(() => { })
  .catch((err) => {
    console.error("Failed execution: ", err)
    return -1
  })
```

See the [Wox adapter for Microsoft Graph](https://github.com/cfe84/wox-microsoft) for an example