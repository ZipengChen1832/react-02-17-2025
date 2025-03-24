export interface CheckboxProps {
  label: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function Checkbox({ label, checked, onChange }: CheckboxProps) {
  return (
    <div className="checkbox">
      <label className="checkbox__label">
        <input
          type="checkbox"
          className="checkbox__input"
          checked={checked}
          onChange={onChange}
        />
        {label}
      </label>
    </div>
  );
}
