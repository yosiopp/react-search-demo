import { Result } from "../../libs/hooks";

export type XxxCondition = {
  name: string;
};

export type XxxResult = {
  id: string;
  name: string;
  timestamp: number;
};

export type XxxError = {
  message: string;
};

export const getErrorMessages = (errors?: XxxError[]): string[] =>
  errors ? errors?.map((e) => e.message) : [];

export const findXxxData = async (
  condition: XxxCondition
): Promise<Result<XxxResult[], XxxError[]>> => {
  const ret: Response = await new Promise((resolve) => {
    setTimeout(() => {
      // ダミーレスポンス
      resolve({
        ok: true,
        json: async () => [
          {
            id: "1",
            name: "田中",
            timestamp: new Date(2023, 2, 22, 10, 0, 0),
          },
          {
            id: "2",
            name: "鈴木",
            timestamp: new Date(2023, 2, 22, 10, 1, 0),
          },
          {
            id: "3",
            name: "佐藤",
            timestamp: new Date(2023, 2, 22, 10, 2, 0),
          },
        ],
      } as Response);
    }, 1000);
  });
  if (ret.ok) {
    return Result.Ok(await ret.json());
  } else {
    return Result.Err(await ret.json());
  }
};