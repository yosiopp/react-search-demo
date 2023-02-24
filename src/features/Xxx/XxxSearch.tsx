import ErrorComponent from "../../components/ErrorComponent";
import Spinner from "../../components/Spinner";
import { Result, SearchHandler, useSearch } from "../../libs/hooks";
import {
  findXxxData,
  getErrorMessages,
  XxxCondition,
  XxxError,
  XxxResult,
} from "./model";
import XxxConditionComponent from "./XxxConditionComponent";
import XxxResultComponent from "./XxxResultComponent";

const XxxSearchHandler: SearchHandler<XxxCondition, XxxResult, XxxError> = {
  search: async (
    condition: XxxCondition
  ): Promise<Result<XxxResult[], XxxError[]>> => {
    return await findXxxData(condition);
  },
  clear: async (): Promise<void> => {},
};

const XxxSearch = () => {
  const { search, results, errors, isLoading, isSearched } = useSearch<
    XxxCondition,
    XxxResult,
    XxxError
  >(XxxSearchHandler);
  const onSearch = async (condition: XxxCondition) => {
    await search(condition);
  };
  return (
    <div className="container search xxx">
      <ErrorComponent errors={getErrorMessages(errors)} />
      <XxxConditionComponent onSearch={onSearch} />
      {!isLoading && isSearched && <XxxResultComponent results={results} />}
      {isLoading && <Spinner />}
    </div>
  );
};

export default XxxSearch;
