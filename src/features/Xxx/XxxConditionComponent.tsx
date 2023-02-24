import { FormEvent } from "react";
import { XxxCondition } from "./model";

type Props = {
  onSearch: (cond: XxxCondition) => void;
};

const XxxConditionComponent = ({ onSearch }: Props) => {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    // react-hook-formとか使う
    event.preventDefault();
    const form = event.target as HTMLFormElement;
    const cond: XxxCondition = {
      name: form.elements["name"].value,
    };
    onSearch(cond);
  };
  return (
    <div className="condition">
        <form onSubmit={handleSubmit}>
        <div><input type="text" name="name" placeholder="name" /></div>
        <button>検索</button>
        </form>
    </div>
  );
};

export default XxxConditionComponent;
