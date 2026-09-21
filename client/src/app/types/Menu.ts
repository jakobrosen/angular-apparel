// En länk i en menykolumn. name blir värdet på kolumnens itemParam
// (t.ex. category=shoes). Både Brand och Category passar in här direkt.
// label används för visningstext när namnet inte duger, annars visas
// name med "-" utbytt mot mellanslag.
export interface MenuItem {
  name: string;
  label?: string;
  // Sätts när länken är ett eget filter istället för en kategori
  // eller ett märke, och ersätter då kolumnens itemParam.
  params?: Record<string, string>;
}

// En kolumn i menyn, t.ex. "WOMEN'S CLOTHING". Varje item länkar till
// /products med kolumnens params + sitt eget värde, t.ex.
// /products?gender=women&new=true&category=shoes.
export interface MenuColumnDef {
  heading: string;
  // Params som gäller alla länkar i kolumnen.
  params: Record<string, string>;
  // Query paramen som item.name blir värdet på.
  itemParam?: 'category' | 'brand';
  items: MenuItem[];
}

// En huvudrubrik i menyn ("WOMEN") med sina kolumner.
export interface MenuSection {
  heading: string;
  columns: MenuColumnDef[];
}
