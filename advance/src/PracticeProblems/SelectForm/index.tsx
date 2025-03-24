import { useState } from "react";
import "./style.css";
import Checkbox, { CheckboxProps } from "./Checkbox";

interface Item {
  id: number;
  name: string;
  checked: boolean;
}

export default function SelectForm() {
  const [items, setItems] = useState<Item[]>([
    { id: 1, name: "Kosher", checked: false },
    { id: 2, name: "Celery", checked: false },
    { id: 3, name: "Egg", checked: false },
  ]);

  const isAllSelected = items.every((item) => item.checked);

  const handleSelectAll = () => {
    setItems(
      items.map((item) => ({
        ...item,
        checked: !isAllSelected,
      }))
    );
  };

  const handleClear = () => {
    setItems(
      items.map((item) => ({
        ...item,
        checked: false,
      }))
    );
  };

  const handleToggle = (id: number) => {
    setItems(
      items.map((item) => {
        return item.id === id
          ? {
              ...item,
              checked: !item.checked,
            }
          : item;
      })
    );
  };

  return (
    <div className="select-form">
      <div className="selected-items">Selected Values:</div>
      <div className="checkboxes-list">
        <Checkbox
          label="Select All"
          checked={isAllSelected}
          onChange={handleSelectAll}
        />
        {items.map((item) => {
          const { id, name, checked } = item;
          return (
            <Checkbox
              key={id}
              label={name}
              checked={checked}
              onChange={() => handleToggle(id)}
            />
          );
        })}
      </div>
      <button className="clear-btn" onClick={handleClear}>
        Clear All
      </button>
    </div>
  );
}

// export function SelectFormBad() {
//   const items = ["Kosher", "Celery", "Egg"];
//   const [selectedItems, setSelectedItems] = useState<string[]>([
//     "Kosher",
//     "Celery",
//   ]);

//   const [isAllSelected, setIsAllSelected] = useState(false);

//   useEffect(() => {
//     if (selectedItems.length === items.length) {
//       setIsAllSelected(true);
//     } else {
//       setIsAllSelected(false);
//     }
//   }, [selectedItems]);

//   const handleToggleAll = () => {
//     if (items.length === selectedItems.length) {
//       setSelectedItems([]);
//       setIsAllSelected(false);
//     } else {
//       setSelectedItems([...items]);
//       setIsAllSelected(true);
//     }
//   };

//   const handleCheck = (item: string) => {
//     if (selectedItems.includes(item)) {
//       setSelectedItems(selectedItems.filter((i) => i !== item));
//     } else {
//       setSelectedItems([...selectedItems, item]);
//     }
//   };

//   const handleClear = () => {
//     setSelectedItems([]);
//     setIsAllSelected(false);
//   };

//   return (
//     <div className="select-form">
//       <div className="selected-items">
//         Selected Values:
//         {selectedItems.map((item) => (
//           <span key={item}>{item}, </span>
//         ))}
//       </div>
//       <div className="checkboxes-list">
//         <Checkbox
//           label="Select All"
//           checked={isAllSelected}
//           onChange={handleToggleAll}
//         />
//         {items.map((item) => {
//           return (
//             <Checkbox
//               key={item}
//               label={item}
//               checked={selectedItems.includes(item)}
//               onChange={() => handleCheck(item)}
//             />
//           );
//         })}
//       </div>
//       <button className="clear-btn" onClick={handleClear}>
//         Clear All
//       </button>
//     </div>
//   );
// }
