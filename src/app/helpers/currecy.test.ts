import { describe, expect, it } from "vitest";
import { formatCurrency } from "./currecy";

describe("formatCurrency", () => {
  it("Deve formatar um valor inteiro", () => {
    expect(formatCurrency(100)).toBe("R$ 100,00");
  });
  it("Deve formatar um valor decimal", () => {
    expect(formatCurrency(99.99)).toBe("R$ 99,99");
  });
  it("Deve formatar zero", () => {
    expect(formatCurrency(0)).toBe("R$ 0,00");
  });
  it("Deve testar valor negativo", () => {
    expect(formatCurrency(-100))
  });
  it("Deve formatar valores acima de 1000", () => {
    expect(formatCurrency(1500)).toBe("R$ 1.500,00")
  })
});
