export {}

declare global {
  namespace NodeJS {
    interface ProcessEnv {
      TOKEN: string
      // add more in the future
    }
  }
}
