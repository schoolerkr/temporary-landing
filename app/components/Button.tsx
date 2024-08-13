interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  icon?: React.ReactNode
  title: string

  color: string
  textColor: string
}

export default function Button(props: IProps) {
  return (
    <button
      className="inline-flex items-center gap-2.5 rounded-full px-7 py-4 shadow-[0_0_6px_0_rgba(0,0,0,0.08)]"
      style={{
        backgroundColor: props.color,
      }}
      {...props}
    >
      {props.icon}

      <span
        className="font-bold leading-6 md:text-lg"
        style={{
          color: props.textColor,
        }}
      >
        {props.title}
      </span>
    </button>
  )
}
