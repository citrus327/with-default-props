interface SimpleProps {
  word?: string
}

export const Simple: React.FC<SimpleProps> = (props) => {
  return <h1>Hello{props.word}</h1>
}
