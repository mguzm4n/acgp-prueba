
import { useQuery } from '@tanstack/react-query'
import './App.css'
import BooksForm from './components/BooksForm'
import { getAllBooks } from './services/books'

function App() {
  const { data, isPending } = useQuery({
    queryKey: ["books"],
    queryFn: getAllBooks,
  });


  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col gap-4">
        <h1 className="">Creación de libro</h1>
        <div>
          <BooksForm />
        </div>
      </div>
      <div className="">
        <h1>Todos los libros registrados</h1>
        <div>
          {isPending && <div>
            Cargando datos...
          </div>}
          <div>
            {data?.map(b => (<div key={b.id}>
              { b.authorName }
            </div>))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
