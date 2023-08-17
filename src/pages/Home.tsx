import { useEffect, useState } from 'react';
import { getCategories } from '../services/api';

type GetCategory = {
  id: string,
  name: string,
};

function Home() {
  const [categories, setCategories] = useState<GetCategory[]>([]);

  useEffect(() => {
    const awaitApi = async () => {
      const result = await getCategories();
      setCategories(result);
    };
    awaitApi();
  }, []);

  return (
    <div>
      { categories.map((category) => (
        <label
          data-testid="category"
          id={ `category-${category.id}` }
          key={ category.id }
          htmlFor={ category.id }
        >
          <input
            name="category"
            id={ category.id }
            type="radio"
          />
          { category.name }
        </label>
      )) }
      <h1
        className="title"
        data-testid="home-initial-message"
      >
        Digite algum termo de pesquisa ou escolha uma categoria.
      </h1>
    </div>
  );
}
export default Home;
