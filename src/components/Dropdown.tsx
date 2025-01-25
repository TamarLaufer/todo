import { useCallback, useState } from "react";
import {
  DropdownOptionStyle,
  DropdownSelectStyle,
} from "src/styled-components/styled-components";

interface DropdownType {
  options: { label: string; value: string }[];
  onChange: (value: string) => void;
  defaultValue?: string;
}

const Dropdown: React.FC<DropdownType> = ({
  options,
  onChange,
  defaultValue,
}): JSX.Element => {
  const [selectedValue, setSelectedValue] = useState(defaultValue || "");

  const handleSelectedValue = useCallback(
    (e: React.ChangeEvent<HTMLSelectElement>) => {
      const value = e.target.value;
      setSelectedValue(value);
      onChange(value);
      console.log(value);
    },
    [onChange]
  );

  return (
    <DropdownSelectStyle value={selectedValue} onChange={handleSelectedValue}>
      {options.map((options) => (
        <DropdownOptionStyle key={options.value} value={options.value}>
          {options.label}
        </DropdownOptionStyle>
      ))}
    </DropdownSelectStyle>
  );
};

export default Dropdown;
