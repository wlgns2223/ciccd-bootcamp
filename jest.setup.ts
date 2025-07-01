import "@testing-library/jest-dom";

// TypeScript에서 jest-dom matchers를 인식하도록 설정
declare global {
  namespace jest {
    interface Matchers<R> {
      toBeInTheDocument(): R;
    }
  }
}
