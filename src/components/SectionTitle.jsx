

export const SectionTitle = ({text, classNames}) => {
  return (
    <div>
      <p className={`${classNames} uppercase text-[10px] lg:text-xs text-green-200 font-semibold leading-8`}>{text}</p>
    </div>
  )
}