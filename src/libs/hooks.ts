import { useState } from "react";

export type Ok<T> = { _tag: "Ok"; ok: T };
export type Err<E> = { _tag: "Err"; err: E };
export type Result<T, E> = Ok<T> | Err<E>;
export const Result = Object.freeze({
  Ok: <T, E>(ok: T): Result<T, E> => ({ _tag: "Ok", ok }),
  Err: <T, E>(err: E): Result<T, E> => ({ _tag: "Err", err }),
});

export interface SearchHandler<T, R, E> {
  search(condition: T): Promise<Result<R[], E[]>>
  clear(): void
}

export function useSearch<T, R, E>(handler: SearchHandler<T, R, E>){
  const [results, setResults] = useState<R[]>([]);
  const [errors, setErrors] = useState<E[]>([]);
  const [isLoading, setLoading] = useState(false);
  const [isSearched, setSearched] = useState(false);
  const search = async (condition: T) => {
    setLoading(true);
    setSearched(true);
    const ret = await handler.search(condition);
    if(ret._tag === 'Ok') {
      setResults(ret.ok);
    } else {
      setErrors(ret.err);
    }
    setLoading(false);
  };
  const clear = async () => {
    setErrors([]);
    setResults([]);
    setSearched(false);
    await handler.clear();
  }
  return { search, clear, results, errors, isLoading, isSearched };
}