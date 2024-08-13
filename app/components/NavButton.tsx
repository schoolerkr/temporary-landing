interface IProps
  extends React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  > {
  title: string
}

export default function NavButton(props: IProps) {
  return (
    <button
      className="rounded-md bg-schooler-black px-8 py-[10px] dark:bg-white"
      {...props}
    >
      <span className="font-bold leading-6 text-white dark:text-schooler-black">
        {props.title}
      </span>
    </button>
  )
}
