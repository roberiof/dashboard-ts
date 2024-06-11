import { Switch } from '@/components/ui/switch'

interface SwitchLabelProps {
  label: string
}

export function SwitchLabel({ label }: SwitchLabelProps) {
  return (
    <div className="flex items-center space-x-2">
      <Switch id={label} />
      <label htmlFor={label}>{label}</label>
    </div>
  )
}
