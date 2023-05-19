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
  if (value && defaultValue) {
    throw new Error(
      'Both value and defaultValue were given. Please provide one.'
    )
  }

  return (
    <input
      type="number"
      name={name}
      max={max}
      min={min}
      step={step}
      //For uncontrolled component
      defaultValue={defaultValue ?? undefined}
      //For Controlled Component
      value={value ?? undefined}
      onChange={onChange ?? undefined}
    />
  )
}
