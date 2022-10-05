import { useState } from "react";
interface CkekProps {
    label: string;
}
export function Checkbox(props: CkekProps) {
    const [isChecked, setIsChecked] = useState(false);
    if(isChecked == true) {
        console.log("teste");
    }
    return (
        <div className="checkbox-wrapper">
            <label className="switch">
                <input type="checkbox" checked={isChecked} onChange={() => setIsChecked((prev) => !prev)} />
                <span className="slider round"></span>
            </label>
        </div>
    );

}