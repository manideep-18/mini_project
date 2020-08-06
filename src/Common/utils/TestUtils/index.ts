export function resolveWithTimeout<T>(response: T): Promise<T> {
   const timeOut = process.env.IS_JEST ? 0 : 2000
   return new Promise(resolve => {
      setTimeout(() => resolve(response), timeOut)
   })
}

export function waitForMilliseconds(milliSeconds: number) {
   return new Promise(resolve => {
      setTimeout(() => resolve(), milliSeconds)
   })
}

export function withTranslationProps(): object {
   return {
      i18n: null as any,
      tReady: true,
      t: (): string => ''
   }
}

export const isTestEnvironment = (): boolean => {
   if (process.env.IS_JEST) {
      return true
   }
   return false
}
