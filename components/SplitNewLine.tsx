type TProps = {
  text: string
}

const SplitNewLine = ({ text }: TProps): JSX.Element => {
  const split_text = text.split('\n')

  return (
    <>
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
    </>
  )
}

export default SplitNewLine
