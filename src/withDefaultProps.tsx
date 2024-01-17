import type { ComponentType, FC } from "react"

const withDefaultProps = <P extends Object>(
  Component: ComponentType<P>,
  defaultProps: Partial<P>,
) => {
  const Wrapped: FC<P> = (props) => <Component {...props} />

  Wrapped.displayName = Component.displayName
  Wrapped.defaultProps = { ...Component.defaultProps, ...defaultProps }

  return Wrapped
}

export { withDefaultProps }
