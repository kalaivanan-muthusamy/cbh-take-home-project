const { deterministicPartitionKey } = require("./dpk");

describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });

  it("Returns the literal '0' key when event is undefined", () => {
    expect(deterministicPartitionKey(undefined)).toBe("0");
  });

  it("Returns hash when event has no partition key", () => {
    const event = {};
    expect(deterministicPartitionKey(event)).toBe(
      "c1802e6b9670927ebfddb7f67b3824642237361f07db35526c42c555ffd2dbe74156c366e1550ef8c0508a6cc796409a7194a59bba4d300a6182b483d315a862"
    );
  });

  it("Returns key when event has a partition key", () => {
    const event = { partitionKey: "key123" };
    expect(deterministicPartitionKey(event)).toBe("key123");
  });

  it("Returns hash when key exceeds maximum length", () => {
    const event = { partitionKey: "a".repeat(300) };
    expect(deterministicPartitionKey(event)).toBe(
      "7350d99d1a20435c283070f3613302edb7027fced163086b048bd3ded530c5cb7a8ced83d1c6fda78f8832c61fb02698d14252c6b4ecf6989b81b04ca99a6302"
    );
  });

  it("Returns key when partition key is not a string", () => {
    const event = { partitionKey: 123 };
    expect(deterministicPartitionKey(event)).toBe("123");
  });
});
