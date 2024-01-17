import { render, screen } from "@testing-library/react"
import { it, describe, expect } from "vitest"
import { Simple } from "./__fixtures__/simple"
import { withDefaultProps } from "../src"

describe("simple", () => {
  it("should render", async () => {
    render(<Simple />)
    const match = screen.getByText("Hello")
    expect(match).toBeDefined()
  })

  it("should render with addition props", async () => {
    const Wrapped = withDefaultProps(Simple, {
      word: " world",
    })
    render(<Wrapped />)
    expect(Wrapped?.defaultProps?.word).toBe(" world")
    const match = screen.getByText("Hello world")
    expect(match).toBeDefined()
  })
})
