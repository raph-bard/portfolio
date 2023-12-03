import Icon from "./Icon";

export default function PrintButton() {
    const handlePrintClick = () => {
      window.print();
    };
  
    return (
      <button className="pr-d-none" id="print-button" onClick={handlePrintClick}>
      <Icon icon={"print"}/>
      </button>
    );
  }
