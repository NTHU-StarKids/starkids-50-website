type TProps = {
  text: string
  className?: string
}

const SplitNewLine = ({ text, className }: TProps): JSX.Element => {
  const split_text = text.split('\n')

  return (
    <span className={className}>
      {split_text.map((str, index) => {
        if (index == split_text.length + 1)
          return <span key={`text-${index}`}>{str}</span>
        return (
          <span key={`text-${index}`}>
            {str}
            <br></br>
          </span>
        )
      })}
    </span>
  )
}

export default SplitNewLine
