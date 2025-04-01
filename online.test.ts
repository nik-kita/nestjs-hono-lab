function lab(args: any[]): any {
  const len = args.length;

  if (len === 0) return null;
  else if (len === 1) return args.pop();

  return args.reduce((first, second) => {
    return [first, second];
  });
}

Deno.test("online", async (t) => {
  await t.step("should do what i want", () => {
    const input: any[] = [];
    for (let i = 0; i < 4; ++i) input.push(i);
    console.time("time");
    const actual = lab(input);
    console.timeEnd("time");
    console.log(actual);
  });
});
