import { List, ListRowRenderer } from "react-virtualized";

import { ProductItem } from "./ProductItem";

interface SearchResultsProps {
  totalPrice: number;
  results: Array<{
    id: number;
    price: number;
    priceFormated: string;
    title: string;
  }>;
  onAddToWishList: (id: number) => void;
}

export function SearchResults({
  results,
  onAddToWishList,
  totalPrice,
}: SearchResultsProps) {
  const rowRenderer: ListRowRenderer = ({ index, key, style }) => {
    return (
      <div key={key} style={style}>
        <ProductItem
          product={results[index]}
          onAddToWishList={onAddToWishList}
        />
      </div>
    );
  };

  return (
    <div>
      <h2>{totalPrice}</h2>

      <List
        height={300}
        rowHeight={30}
        width={900}
        overscanRowCount={5}
        rowCount={results.length}
        rowRenderer={rowRenderer}
      />
    </div>
  );
}

/**
 *1. Criar uma nova versao do component
 *2. Coparar com a versao anterir
 *3. Se houverem alteracoes, vai atualizar o que alterou
 */

/**
 *1. Pure Functional Compnents
 *2. Renders too often
 *3. Re-renders with same props
 *4. Medium to big size
 */

/**
 * useMemo / useCallback
 *
 * 1* calculos pesados
 * 2* igualdade referencial (quando a gente repassa aquela informacao a um componente filho)
 *
 *
 */
