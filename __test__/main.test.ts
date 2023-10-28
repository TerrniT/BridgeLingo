import { sum } from "../src/main"
import { describe, it, expect } from "@jest/globals"

describe('main test', () => {
  it('sum function', () => {
    expect(sum(2, 3)).toBe(5)
    expect(sum(3, 4)).toBe(7)
    expect(sum(10, 20)).toBe(30)
  })
})
