# @citrus327/with-default-props

![Download](https://img.shields.io/npm/dw/@citrus327/with-default-props)
![Version](https://img.shields.io/npm/v/@citrus327/with-default-props)

a HOC that applies default props to React component


## Installation

```sh
pnpm install @citrus327/with-default-props
```

## Usage

```ts
import { withDefaultProps } from '@citrus327/with-default-props'

interface SimpleProps {
  word?: string
}

export const Simple: React.FC<SimpleProps> = (props) => {
  return <h1>Hello{props.word}</h1>
}


const Wrapped = withDefaultProps(Simple, {
  word: " world",
})

```
