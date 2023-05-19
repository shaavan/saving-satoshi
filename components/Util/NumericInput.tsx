export default function NumericInput({
  label,
  name,
  max,
  min,
  step,
  defaultValue,
  value,
  onChange,
}: {
  label: string
  name?: string
  max?: number
  min?: number
  step?: number
  defaultValue?: number
  value?: number
  onChange?: (evt: any) => void
}) {
  return (
    <input
      type="number"
      name={name}
      max={max}
      min={min}
      step={step}
      defaultValue={defaultValue}
      value={value}
    />
  )
}
